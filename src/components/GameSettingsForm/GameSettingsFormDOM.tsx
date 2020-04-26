import React from "react";
import { GameSettingsFormProps } from "./interfaces";

const getInputValue = (form: HTMLFormElement, name: string): string => {
  return (form.querySelector(`[name=${name}]`) as HTMLInputElement).value;
};

const playerFields = (target: any, playerNumber: number) => {
  return {
    name: getInputValue(target, `player${playerNumber}Name`),
    symbol: getInputValue(target, `player${playerNumber}Symbol`),
    color: getInputValue(target, `player${playerNumber}Color`),
  };
};

const PlayerSubForm: React.FC<{ numberOfPlayer: number }> = ({
  numberOfPlayer,
}) => {
  return (
    <fieldset>
      <legend>MyPlayer {numberOfPlayer}</legend>
      <label>
        Name:
        <input
          name={`player${numberOfPlayer}Name`}
          type="text"
          placeholder={`Player ${numberOfPlayer} name`}
          required
        />
      </label>
      <label>
        Color:
        <input type="color" name={`player${numberOfPlayer}Color`} />
      </label>
      <label>
        Symbol:
        <select name={`player${numberOfPlayer}Symbol`} defaultValue="X">
          <option>X</option>
          <option>Y</option>
          <option>O</option>
        </select>
      </label>
    </fieldset>
  );
};

export class GameSettingsFormDOM extends React.Component<
  GameSettingsFormProps,
  {}
> {
  handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const target = ev.target as HTMLFormElement;
    this.props.onSubmit({
      player1: playerFields(target, 1),
      player2: playerFields(target, 2),
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Game Settings</legend>
          <PlayerSubForm numberOfPlayer={1} />
          <PlayerSubForm numberOfPlayer={2} />
          <button>Start</button>
        </fieldset>
      </form>
    );
  }
}

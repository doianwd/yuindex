import { CommandType } from "../command";

/**
 * 查看历史命令
 * @author yupi
 */
const historyCommand: CommandType = {
  func: "history",
  alias: ["h"],
  options: [],
  action(options, terminal): void {
    const commandOutputTypes = terminal.listCommandHistory();
    commandOutputTypes.forEach((command, index) => {
      terminal.writeTextResult(`${index + 1} ${command.text}`);
    });
  },
};

export default historyCommand;

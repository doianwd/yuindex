import { CommandType } from "../../command";

/**
 * 知乎搜索命令
 * @author yupi
 */
const zhihuCommand: CommandType = {
  func: "zhihu",
  alias: [],
  params: [
    {
      key: "word",
      required: true,
    },
  ],
  options: [
    {
      key: "self",
      alias: ["s"],
      type: "boolean",
      defaultValue: false,
    },
  ],
  action(options, terminal) {
    const { _, self } = options;
    const word = _.length > 0 ? _[0] : "";
    const targetLink = `https://www.zhihu.com/search?q=${word}`;
    if (self) {
      window.location.href = targetLink;
    } else {
      window.open(targetLink);
    }
  },
};

export default zhihuCommand;

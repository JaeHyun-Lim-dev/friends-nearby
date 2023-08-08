export const message = {
  /**
   * @description 네이티브 영역에 postMessage를 이용해 메시지/요청을 전달합니다.
   * @param {string} command 원하는 커맨드를 작성합니다. "message", "bluetooth" 중 하나의 값으로 합니다.
   * @param {*} params
   */
  requestFromWebview: function (command, params) {
    const REQ_TIME = "ID" + Date.now();
    const FUNC_OBJ = {
      id: REQ_TIME,
      command: command,
      params: params,
    };
    const reqCmdJsonString = JSON.stringify(FUNC_OBJ);
    if (!window.webkit) {
      // 네이티브 연결이 성공적이지 못할 때
      throw new Error();
    }
    window.webkit?.messageHandlers?.webViewMessageHandler.postMessage(
      reqCmdJsonString
    );
  },
};

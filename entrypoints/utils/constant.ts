// 常量工具类

import {services} from "./option";

export const urls: any = {
    [services.deepL]: "https://api-free.deepl.com/v2/translate",
    [services.deepLx]: "http://localhost:1188/translate",
    [services.openai]: "https://api.openai.com/v1/chat/completions",
    [services.moonshot]: "https://api.moonshot.cn/v1/chat/completions",
    [services.custom]: "https://localhost:11434/v1/chat/completions",
    [services.tongyi]: "https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation",
    [services.zhipu]: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
    [services.xiaoniu]: "https://api.niutrans.com/NiuTransServer/translationXML",
    [services.claude]: "https://api.anthropic.com/v1/messages",
    [services.baidu]: "https://fanyi-api.baidu.com/api/trans/vip/translate",
    [services.baichuan]: "https://api.baichuan-ai.com/v1/chat/completions",
    [services.lingyi]: "https://api.lingyiwanwu.com/v1/chat/completions",
    [services.deepseek]: "https://api.deepseek.com/chat/completions",
    [services.jieyue]: "https://api.stepfun.com/v1/chat/completions",
    [services.yiyan]: {tokenUrl: "https://aip.baidubce.com/oauth/2.0/token"},
    [services.graq]: "https://api.groq.com/openai/v1/chat/completions",
    [services.cozecom]: "https://api.coze.com/open_api/v2/chat",
    [services.cozecn]: "https://api.coze.cn/open_api/v2/chat",
    [services.transmart]: "https://transmart.qq.com/api/imt",
    [services.baidufree]:"https://fanyi.baidu.com/transapi"
}

export const method = {POST: "POST", GET: "GET",};

export const constants = {
    // 电脑设备事件
    DoubleClick: "DoubleClick",
    LongPress: "LongPress",
    MiddleClick: "MiddleClick",
    // 触屏设备事件
    TwoFinger: "TwoFinger",
    ThreeFinger: "ThreeFinger",
    FourFinger: "FourFinger",
    DoubleClickScreen: "DoubleClickScree",
    TripleClickScreen: "TripleClickScreen",
}

export const styles = {
    // 仅译文
    singleTranslation: 0,
    // 双语对照模式
    bilingualTranslation: 1,
}
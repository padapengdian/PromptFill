/**
 * 弹窗提示文案常量
 * 用于统一管理各种确认弹窗、警告提示的文案内容
 */

/**
 * 智能拆分确认弹窗文案
 */
export const SMART_SPLIT_CONFIRM_MESSAGE = {
  cn: `智能拆分将根据当前内容自动润色、结构化并提取变量，
这将重写当前模板内容并可能创建新词库。

【Beta 测试版限制】
  AI 理解能力有限，可能无法准确识别变量
  拆分结果不稳定，建议手动调整
  可能产生错误或意外的结果
  建议在测试模板上使用，避免影响重要内容

确定继续吗？`,

  en: `Smart Split will polish, structure and extract variables based on
current content. This will rewrite current template and may create new banks.

[Beta Limitations]
  Limited AI understanding, variable extraction may be inaccurate
  Unstable results, manual adjustment recommended
  May produce errors or unexpected results
  Recommended for testing only, avoid using on important templates

Continue?`
};

/**
 * 智能拆分标题
 */
export const SMART_SPLIT_CONFIRM_TITLE = {
  cn: '智能拆分 (Beta)',
  en: 'Smart Split (Beta)'
};

/**
 * 智能拆分按钮文案
 */
export const SMART_SPLIT_BUTTON_TEXT = {
  confirm: {
    cn: '确定拆分',
    en: 'Confirm Split'
  },
  cancel: {
    cn: '取消',
    en: 'Cancel'
  }
};

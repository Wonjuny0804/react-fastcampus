'use strict';

/* -------------------------------------------------------------------------- */
// 메시지 스타일

const MESSAGE_STYLES = {
log: `
    color: #1c1c1d;
    font-weight: bold;
`,
success: `
    color: #00c712;
    font-weight: bold;
`,
info: `
    color: #006afc;
    font-weight: bold;
`,
warn: `
    color: #ff9500;
    font-weight: bold;
`,
error: `
    color: #ee3327;
    font-weight: bold;
`,
};

/* -------------------------------------------------------------------------- */
// 메시지 유틸리티

export const log = (message, messageStyle = MESSAGE_STYLES.log) => {
  console.log(`%c${message}`, messageStyle);
}

export const info = (message = MESSAGE_STYLES.info) => {
  return log(`🔵 ${message}`);
}

export const success = (message = MESSAGE_STYLES.success) => {
  return log(`🟢 ${message}`);
};

export const warn = (message = MESSAGE_STYLES.warn) => {
  return log(`🟠 ${message}`);
}

export const error = (message = MESSAGE_STYLES.error) => {
  return log(`🔴 ${message}`);
}

/* -------------------------------------------------------------------------- */


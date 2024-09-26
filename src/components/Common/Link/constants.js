const ANCHOR_REFERRER_POLICY_DEF_IDX = 4;

const ANCHOR_REFERRER_POLICY_VALUES = [
  'no-referrer',
  'no-referrer-when-downgrade',
  'origin',
  'origin-when-cross-origin',
  'same-origin',
  'strict-origin',
  'strict-origin-when-cross-origin',
  'unsafe-url',
];

const ANCHOR_TARGET_DEF_IDX = 0;

const ANCHOR_TARGET_VALUES = ['_self', '_blank', '_parent', '_top'];

export {
  ANCHOR_REFERRER_POLICY_DEF_IDX,
  ANCHOR_REFERRER_POLICY_VALUES,
  ANCHOR_TARGET_DEF_IDX,
  ANCHOR_TARGET_VALUES,
};

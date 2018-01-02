import * as SubscriptionApiUtil from '../util/subscription_api_util';

export const RECEIVE_SUBS = "RECEIVE_SUBS";
export const RECEIVE_SUB = "RECEIVE_SUB";
export const REMOVE_SUB = "REMOVE_SUB";

const receiveSubs = (subs) => ({
  type: RECEIVE_SUBS,
  subs
});

const receiveSub = (sub) => ({
  type: RECEIVE_SUB,
  sub
});

const removeSub = (sub) => ({
  type: REMOVE_SUB,
  sub
});

export const createSub = (sub) => dispatch => {
  return SubscriptionApiUtil.createSub(sub).then(sub => dispatch(receiveSub(sub)));
};

export const fetchSubs = () => dispatch => {
  return SubscriptionApiUtil.fetchSubs().then(subs => dispatch(receiveSubs(sub)));
};

export const deleteSub = (subId) => dispatch => {
  return SubscriptionApiUtil.deleteSub(subId).then(
    sub => dispatch(removeSub(sub))
  );
};

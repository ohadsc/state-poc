import { Action } from '@ngrx/store';

export enum ActionTypes {
  UpdateColor = '[Clock Component] Update Color',
  UpdateMask = '[Clock Component] Update Mask'
}

export class UpdateColor implements Action {
  readonly type = ActionTypes.UpdateColor;
  constructor(public payload: { color: string }) { }
}

export class UpdateMask implements Action {
  readonly type = ActionTypes.UpdateMask;
  constructor(public payload: { mask: string }) { }
}

export type DropOrder = 'before' | 'after';

export interface DraggableEvent {
  source: string;
  target?: string;
  type: DropOrder;
}

export interface ReorderEvent {
  source: string;
  target: string;
  type: DropOrder;
}

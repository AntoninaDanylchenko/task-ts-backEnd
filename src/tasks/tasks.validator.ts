import { body, ValidationChain } from 'express-validator';
import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

export const createValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('The task title is mandatory')
    .trim()
    .isString()
    .withMessage('Title needs to be in text format'),
  body('date')
    .not()
    .isEmpty()
    .withMessage('The task date ismandatory')
    .isString()
    .withMessage('The date needs to be in text format'),
  body('description')
    .trim()
    .isString()
    .withMessage('The description needs to be in text format'),
  body('priority')
    .trim()
    .isIn([Priority.normal, Priority.hight, Priority.low])
    .withMessage('Priority can only be normal, hight or low'),
  body('status')
    .trim()
    .isIn([Status.completed, Status.inProgress, Status.todo])
    .withMessage('Status can only be completed, in progress or to do'),
];

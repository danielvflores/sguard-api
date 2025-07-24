import { Request, Response } from 'express';

export const getModerationLevel = (req: Request, res: Response) => {
  res.json({ level: 'light', customSettings: { /* ... */ } });
};

export const updateModerationLevel = (req: Request, res: Response) => {
  const { level, customSettings } = req.body;
  res.json({ success: true, level });
};
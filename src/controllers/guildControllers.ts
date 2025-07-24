import { Request, Response } from 'express';

export const guilds = (req: Request, res: Response) => {
  const guildList = [
    { id: '123456789', name: 'Guild 1', icon: 'icon_url' },
    { id: '987654321', name: 'Guild 2', icon: 'icon_url' }
  ];
  res.json(guildList);
};

export const guildById = (req: Request, res: Response) => {
  const { guildId } = req.params;
  const guild = {
    id: guildId,
    name: `Guild ${guildId}`,
    icon: 'icon_url',
    memberCount: 100,
    ownerId: '987654321'
  };
  res.json(guild);
};

export const guildConfig = (req: Request, res: Response) => {
  const { guildId } = req.params;
  const config = {
    settings: {
      id: guildId,
      prefix: '!',
      moderationLevel: 'medium',
      logChannel: 'logs'
    }
  };
  res.json(config);
};

export const guildLogs = (req: Request, res: Response) => {
  const { guildId } = req.params;
  res.json({ logChannel: 'logs', id: guildId });
};

export const updateGuildConfig = (req: Request, res: Response) => {
  const { guildId } = req.params;
  const { settings } = req.body;
  res.json({ success: true, settings, id: guildId });
};

export const updateGuildLogs = (req: Request, res: Response) => {
  const { guildId } = req.params;
  const { logChannel } = req.body;
  res.json({ success: true, logChannel, id: guildId });
};
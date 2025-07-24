import { Router } from "express";
import { guilds, guildById, guildConfig, guildLogs, updateGuildConfig, updateGuildLogs } from "../controllers/guildControllers";

const router = Router();


router.get('/guilds', guilds);
router.get('/guilds/:guildId', guildById);
router.get('/guilds/:guildId/config', guildConfig);
router.get('/guilds/:guildId/logs', guildLogs);
router.put('/guilds/:guildId/config', updateGuildConfig);
router.put('/guilds/:guildId/logs', updateGuildLogs);

export default router;
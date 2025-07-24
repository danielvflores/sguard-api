import { Router } from 'express';
import { getModerationLevel, updateModerationLevel } from '../controllers/moderationControllers';

const router = Router();

router.get('/:guildId/moderation', getModerationLevel);
router.put('/:guildId/moderation', updateModerationLevel);

export default router;
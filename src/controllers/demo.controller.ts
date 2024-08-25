import { Request, Response } from 'express';
import Demo from '../models/demo.model';
import Frame from '../models/frame.model';

export const getDemos = async (req: Request, res: Response): Promise<void> => {
    try {
        const demos = await Demo.findAll({ include: [{ model: Frame, as: 'frames' }] });
        res.json(demos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar demos' });
    }
};

export const updateFrame = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { html } = req.body;
    try {
        const frame = await Frame.findByPk(id);
        if (frame) {
            frame.html = html;
            await frame.save();
            res.json(frame);
        } else {
            res.status(404).json({ error: 'Frame não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar frame' });
    }
};

import UserMessage from '../models/userMessage.js';

export const getUsers = async (req, res) => {
    try {
        const userMessage = await UserMessage.find();
        res.status(200).json(userMessage);
    } catch (error) {
        res.status(404).js({ message: error });
    }
};

export const createUsers = async (req, res) => {
    const user = req.body;
    const newUser = new UserMessage(user);
    try {
        await newUser.save();

        https: res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error });
    }
};

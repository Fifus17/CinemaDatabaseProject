import express from "express";
import Room from "../model/room.js";

const addRoom = async (req, res) => {
  try {
    const room = await Room.findOne({ number: req.body.number });
    if (room) {
      throw new Error("Room of given number already exists");
    }
    const data = new Room(req.body);
    const datatoSave = await data.save();
    res.status(200).json({ room: datatoSave });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getRooms = async () => {
  try {
    return await Room.find({});
  } catch (err) {
    throw new Error(err.message);
  }
};

const getRoom = async (number) => {
  try {
    return await Room.findOne({ number });
  } catch (err) {
    throw new Error(err.message);
  }
}

export { addRoom, getRooms, getRoom };

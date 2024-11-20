// Generated controllers based on user input
const mongoose = require("mongoose"); 
const express = require("express"); 
const Studentinfo = require('../models/studentinfoSchema');

// CRUD operations for Studentinfo
// Create Controller 
const createStudentinfo = async (req, res) => { 
    const { Studentname, Misno } = req.body;
    try {
        const studentinfo = await Studentinfo.create({ Studentname, Misno }) 
        await studentinfo.save();
        res.status(201).json(studentinfo);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        res.status(500).json({'Server Error ': error.message});
    }
};

// Update Controller 
const updateStudentinfo = async (req, res) => { 
    const _id=req.params.id;
    const { Studentname, Misno } = req.body;
    try {
        const studentinfo = await Studentinfo.findByIdAndUpdate( _id, { Studentname, Misno },{new:true}) 
        if (!studentinfo) {
            return res.status(404).send('studentinfo not found');
        }
        await studentinfo.save();
        res.status(201).json(studentinfo);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// Delete Controller 
const deleteStudentinfo = async (req, res) => { 
    const _id=req.params.id;
    try {
        const studentinfo = await Studentinfo.findById(_id)
        if (!studentinfo) {
            return res.status(404).send('studentinfo not found');
        }
        await Studentinfo.deleteOne({_id: _id})
        await studentinfo.save();
        res.status(201).json({message: "Deleted Successfully"});
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// get by Id Controller 
const getStudentinfo = async (req, res) => { 
    const _id=req.params.id;
    try {
        const studentinfo = await Studentinfo.findById(_id)
        if (!studentinfo) {
            return res.status(404).send('studentinfo not found');
        }
        res.status(201).json(studentinfo);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

// getAll Controller 
const getAllStudentinfo = async (req, res) => { 
    try {
        const studentinfo = await Studentinfo.find({})
        if (!studentinfo) {
            return res.status(404).send('Nothing found !!');
        }
        res.status(201).json(studentinfo);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            for (it in error.errors) {
                console.log(error.errors[it].message);
            }
            return res.status(400).send(error.message);
        } console.error(error);
        return res.status(500).json({'Server Error':error.message});
    }
};

module.exports = {
    createStudentinfo,
    updateStudentinfo,
    deleteStudentinfo,
    getStudentinfo,
    getAllStudentinfo
}
import { Schema, model } from "mongoose";

const tareaSchema = Schema(
    {
    titulo: { type: String, required: true, 
        unique : false 
    },

    descripcion: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
        
    },

    nivel: {
        type: String,
        required: true
        
    },
    
    done: {
        type: Boolean,
        default: false,
    },
    },
    {
    timestamps: true,
    versionKey: false,
    }
);

export default model("Tarea", tareaSchema);


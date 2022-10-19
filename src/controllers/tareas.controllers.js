import Tarea from '../models/Tarea.js';

export const renderTarea = async (req, res) => {
    try {
    const tarea = await Tarea.find().lean();
    res.render('index', {tarea})
    } catch (error) {
    console.log(error);
    
    }
};

export const agregarTarea = async (req, res, next) => {
    
    const { titulo, autor, descripcion, nivel } = req.body;
    const tarea = new Tarea (req.body);
    const mensaje = "Completar los campos correctamente";
    if ( titulo == ""|| autor == ""|| descripcion == "" || nivel == ""){
        res.render('index', {mensaje})
        
    } else { 
            await tarea.save();
            res.redirect("/");}
        
    };



export const realizada = async (req, res, next) => {
    let { id } = req.params;
    const tarea = await Tarea.findById(id);
    tarea.done = !tarea.done;
    await tarea.save();
    res.redirect("/"); 
};

export const actualizarTarea = async (req, res, next) => {
    const tarea = await Tarea.findById(req.params.id).lean();
    res.render("editar", { tarea });
};

export const editarTareas = async (req, res, next) => {
    const { id } = req.params;
    await Tarea.updateOne({ _id: id }, req.body);
    res.redirect("/");
};   

export const eliminarTareas = async (req, res, next) => {
    let { id } = req.params;
    await Tarea.deleteOne({ _id: id });
    res.redirect("/");
};




import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    titel: {
        type: String,
        require: true
    },
    description: String,
    quantity: {
        type: Number,
        default: 0
    },
    price: {
        type: Number,
        require: true
    },
    availability: {
        type: Boolean,
        default: false
    }
});


export default mongoose.model('product model', productSchema);
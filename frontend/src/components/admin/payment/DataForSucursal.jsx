

const DataForSucursal = ({ formData, currentData, handleInputChange, handleSubmit }) => {

    return (
            <div className="lg:col-span-2 space-y-6">
                {/* Current Data */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Datos Actuales</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <label className="text-sm font-medium text-gray-600 mb-1 block">Valor</label>
                        <div className="text-gray-900 font-medium">$ {currentData?.priceShipmentSucursal}</div>
                    </div>
                </div>
                </div>

                {/* New Data Form */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Nuevos Datos</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Nuevo Valor</label>
                            <input
                            type="text"
                            value={formData.priceShipmentSucursal}
                            onChange={(e) => handleInputChange("priceShipmentSucursal", e.target.value)}
                            placeholder="Nuevo valor para envio sucursal"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end pt-4">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            Modificar Datos
                        </button>
                    </div>
                </form>
                </div>
            </div>
        )
}

export default DataForSucursal;
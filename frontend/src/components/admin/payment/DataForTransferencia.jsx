



const DataForTransferencia = ({ formData, currentData, handleInputChange, handleSubmit }) => {

    return (
        <div className="lg:col-span-2 space-y-6">
            {/* Current Data */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Datos Actuales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                <label className="text-sm font-medium text-gray-600 mb-1 block">Titular</label>
                <div className="text-gray-900 font-medium">{currentData?.transferencia.titularCuentaCbu}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                <label className="text-sm font-medium text-gray-600 mb-1 block">Alias</label>
                <div className="text-gray-900 font-medium">{currentData?.transferencia.aliasCbu}</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                <label className="text-sm font-medium text-gray-600 mb-1 block">CVU</label>
                <div className="text-gray-900 font-medium">{currentData?.transferencia.cbu}</div>
                </div>
            </div>
            </div>

            {/* New Data Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Nuevos Datos</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Nuevo Titular</label>
                        <input
                        type="text"
                        value={formData.transferencia.titularCuentaCbu}
                        onChange={(e) =>
                            handleInputChange("transferencia", {
                                ...formData.transferencia,
                                titularCuentaCbu: e.target.value
                            })
                        }
                        placeholder="Ingresa el nuevo titular"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Nuevo Alias</label>
                        <input
                        type="text"
                        value={formData.transferencia.aliasCbu}
                        onChange={(e) =>
                            handleInputChange("transferencia", {
                                ...formData.transferencia,
                                aliasCbu: e.target.value
                            })
                        }
                        placeholder="Ingresa el nuevo alias"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-gray-700 mb-2 block">Nuevo CVU</label>
                        <input
                        type="text"
                        value={formData.transferencia.cbu}
                        onChange={(e) =>
                            handleInputChange("transferencia", {
                                ...formData.transferencia,
                                cbu: e.target.value
                            })
                        }
                        placeholder="Ingresa el nuevo CVU"
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

export default DataForTransferencia;
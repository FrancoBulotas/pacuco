
import { useState } from "react";
import Swal from 'sweetalert2';
import { IconPlus } from '../../../assets/icons/icons';

const DataForTransferencia = ({ formData, currentData, handleInputChange, handleSubmit }) => {
    const [selectedProfile, setSelectedProfile] = useState('');

    const handleProfileSelect = (e) => {
        const profileName = e.target.value;
        setSelectedProfile(profileName);

        if (profileName && currentData?.transferencia?.savedProfiles?.[profileName]) {
            const selected = currentData.transferencia.savedProfiles[profileName];
            handleInputChange("transferencia", {
                ...formData.transferencia,
                titularCuentaCbu: selected.titularCuentaCbu || '',
                aliasCbu: selected.aliasCbu || '',
                cbu: selected.cbu || ''
            });
        }
    };

    const handleDeleteProfile = async () => {
        if (!selectedProfile) return;

        const result = await Swal.fire({
            title: `¿Eliminar perfil "${selectedProfile}"?`,
            text: "Esta acción no se puede deshacer. Para que los cambios hagan efecto debes dar click en Modificar Datos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#999',
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        });

        if (result.isConfirmed) {
            const updatedProfiles = { ...currentData.transferencia.savedProfiles };
            delete updatedProfiles[selectedProfile];

            handleInputChange("transferencia", {
                ...formData.transferencia,
                savedProfiles: updatedProfiles
            });

            setSelectedProfile('');
        }
    };

    const handleCreateNewProfile = async () => {
        const { value: profileName } = await Swal.fire({
            title: 'Guardar como nuevo perfil',
            input: 'text',
            inputLabel: 'Nombre del nuevo perfil',
            inputPlaceholder: 'Ejemplo: Juan CBU',
            confirmButtonText: 'Guardar',
            cancelButtonText: 'Cancelar',
            showCancelButton: true,
            inputValidator: (value) => {
                if (!value) {
                    return 'Debe ingresar un nombre';
                }
                if (currentData.transferencia.savedProfiles?.[value]) {
                    return 'Ya existe un perfil con ese nombre';
                }
                return null;
            }
        });

        if (profileName) {
            const newProfiles = {
                ...currentData.transferencia.savedProfiles,
                [profileName]: {
                    cbu: formData.transferencia.cbu,
                    aliasCbu: formData.transferencia.aliasCbu,
                    titularCuentaCbu: formData.transferencia.titularCuentaCbu
                }
            };

            handleInputChange("transferencia", {
                ...formData.transferencia,
                savedProfiles: newProfiles
            });

            setSelectedProfile(profileName);

            Swal.fire({
                icon: 'success',
                title: 'Perfil guardado',
                text: `El perfil "${profileName}" fue creado exitosamente. Para que los cambios hagan efecto debes dar click en Modificar Datos`,
                confirmButtonColor: '#000'
            });
        }
    };

    const showCreateProfileButton =
        !selectedProfile &&
        formData.transferencia.cbu &&
        formData.transferencia.aliasCbu &&
        formData.transferencia.titularCuentaCbu;

    return (
        <div className="lg:col-span-2 space-y-6">
            {/* Current Data */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Datos Actuales</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                        <label className="text-sm font-medium text-gray-600 mb-1 block">Titular</label>
                        <div className="text-gray-900 font-medium">{currentData?.transferencia?.titularCuentaCbu}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                        <label className="text-sm font-medium text-gray-600 mb-1 block">Alias</label>
                        <div className="text-gray-900 font-medium">{currentData?.transferencia?.aliasCbu}</div>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                        <label className="text-sm font-medium text-gray-600 mb-1 block">CBU</label>
                        <div className="text-gray-900 font-medium">{currentData?.transferencia?.cbu}</div>
                    </div>
                </div>
            </div>

            {/* New Data Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Nuevos Datos</h2>

                {/* Selector de perfil guardado */}
                {currentData?.transferencia?.savedProfiles && (
                    <div className="mb-4 flex items-center gap-4">
                        <div className="flex-grow">
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Elegir perfil guardado</label>
                            <select
                                value={selectedProfile}
                                onChange={handleProfileSelect}
                                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                            >
                                <option value="">Seleccionar perfil...</option>
                                {Object.keys(currentData.transferencia.savedProfiles).map((profile) => (
                                    <option key={profile} value={profile}>
                                        {profile}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}

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
                            <label className="text-sm font-medium text-gray-700 mb-2 block">Nuevo CBU</label>
                            <input
                                type="text"
                                value={formData.transferencia.cbu}
                                onChange={(e) =>
                                    handleInputChange("transferencia", {
                                        ...formData.transferencia,
                                        cbu: e.target.value
                                    })
                                }
                                placeholder="Ingresa el nuevo CBU"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                            />
                        </div>
                    </div>

                    {selectedProfile && (
                        <div className="flex flex-col gap-2">
                            <button
                                type="button"
                                onClick={handleDeleteProfile}
                                className="px-2 py-2 bg-red-500 text-black rounded-xl hover:bg-red-600"
                            >
                                <i className="bi bi-x-lg" style={{color:'red'}}></i> Eliminar perfil
                            </button>
                        </div>
                    )}
                    <div className="flex justify-between pt-6">                        
                        <button
                            type="submit"
                            className="px-8 py-3 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                        >
                            Modificar Datos
                        </button>

                        {showCreateProfileButton && (
                            <button
                                type="button"
                                onClick={handleCreateNewProfile}
                                className="px-8 py-3 bg-green-600 text-black font-small rounded-xl hover:bg-green-700 transition-colors"
                            >
                                <IconPlus width={'20'} height={'20'} /> Guardar como nuevo perfil
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DataForTransferencia;

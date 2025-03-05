'use client';

import { useState } from 'react';

const PaymentModal = ({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Componente Premium</h2>
        <p className="mb-4">Este componente requiere un pago para ser utilizado.</p>
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Pagar Ahora
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
export const ModalFooter = ({
  onCancel,
  submitLabel,
  isReadOnly,
}: {
  onCancel: () => void;
  submitLabel?: string;
  isReadOnly?: boolean;
}) => (
  <div className="flex justify-end gap-3 pt-4">
    <button
      type="button"
      className="px-4 py-2 border rounded hover:bg-gray-100"
      onClick={onCancel}
    >
      {isReadOnly ? "Cerrar" : "Cancelar"}
    </button>
    {!isReadOnly && (
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {submitLabel}
      </button>
    )}
  </div>
);

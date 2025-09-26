interface Props {
  waiting: number;
  inConsultation: number;
  attended: number;
  critical: number;
}

export const PatientFlowSummary = ({ waiting, inConsultation, attended, critical }: Props) => (
  <div className="bg-gradient-card rounded-xl border shadow-sm">
    <div className="p-4 border-b">
      <h3 className="text-lg font-semibold">Flujo de Pacientes - Hoy</h3>
      <p className="text-sm text-muted-foreground">Distribución por estado de atención</p>
    </div>
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="text-center p-4 bg-medical-light-blue rounded-lg">
        <div className="text-2xl font-bold text-medical-blue">{waiting}</div>
        <div className="text-sm text-muted-foreground">En Espera</div>
      </div>
      <div className="text-center p-4 bg-medical-light-yellow rounded-lg">
        <div className="text-2xl font-bold text-medical-yellow">{inConsultation}</div>
        <div className="text-sm text-muted-foreground">En Consulta</div>
      </div>
      <div className="text-center p-4 bg-medical-light-green rounded-lg">
        <div className="text-2xl font-bold text-medical-green">{attended}</div>
        <div className="text-sm text-muted-foreground">Atendidos</div>
      </div>
      <div className="text-center p-4 bg-medical-light-red rounded-lg">
        <div className="text-2xl font-bold text-medical-red">{critical}</div>
        <div className="text-sm text-muted-foreground">Críticos</div>
      </div>
    </div>
  </div>
);

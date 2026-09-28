export type Lang = 'es' | 'en';

export interface LocalizedText {
  es: string;
  en: string;
}

export type FormFieldType = 'text' | 'textarea' | 'select';

export interface FormFieldOption {
  value: string;
  label: LocalizedText;
}

export interface FormField {
  name: string;
  type: FormFieldType;
  label: LocalizedText;
  placeholder?: LocalizedText;
  options?: FormFieldOption[];
  required: boolean;
  rows?: number;
}

export interface FormDefinition {
  id: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  fields: FormField[];
  whatsappTemplate: LocalizedText;
}

const siNo: FormFieldOption[] = [
  { value: 'si', label: { es: 'Sí', en: 'Yes' } },
  { value: 'no', label: { es: 'No', en: 'No' } },
];

export const forms: FormDefinition[] = [
  {
    id: 'diagnostico-cambiario',
    eyebrow: {
      es: 'Evaluación 01',
      en: 'Assessment 01',
    },
    title: {
      es: 'Diagnóstico cambiario y regulatorio (BCRA)',
      en: 'Currency and regulatory assessment (BCRA)',
    },
    description: {
      es: 'Definí tu desafío cambiario actual y el estado de la operación MULC. Lo revisamos con criterio antes de recomendar una estructura.',
      en: 'Define your current currency challenge and the status of your MULC operation. We review it before recommending a structure.',
    },
    fields: [
      {
        name: 'desafio_principal',
        type: 'select',
        label: { es: 'Desafío principal', en: 'Main challenge' },
        required: true,
        options: [
          { value: 'pagos_fletes', label: { es: 'Pagos de fletes', en: 'Freight payments' } },
          { value: 'liquidacion_divisas', label: { es: 'Liquidación de divisas', en: 'Currency settlement' } },
          { value: 'pago_proveedores', label: { es: 'Pago a proveedores', en: 'Supplier payments' } },
          { value: 'otro', label: { es: 'Otro', en: 'Other' } },
        ],
      },
      {
        name: 'operacion_mulc',
        type: 'select',
        label: { es: '¿Operación MULC?', en: 'MULC operation?' },
        required: true,
        options: [
          { value: 'si', label: { es: 'Sí', en: 'Yes' } },
          { value: 'no', label: { es: 'No', en: 'No' } },
          { value: 'en_proceso', label: { es: 'En proceso', en: 'In progress' } },
        ],
      },
      {
        name: 'descripcion_traba',
        type: 'textarea',
        label: { es: 'Descripción del trabajo', en: 'Job description' },
        placeholder: {
          es: 'Ej.: pagos a proveedores en USD con demora en comprobantes',
          en: 'Ex: USD supplier payments with delayed documentation',
        },
        required: true,
        rows: 4,
      },
      {
        name: 'cargo',
        type: 'select',
        label: { es: 'Cargo', en: 'Role' },
        required: true,
        options: [
          { value: 'ceo_director', label: { es: 'CEO / Director', en: 'CEO / Director' } },
          { value: 'finanzas', label: { es: 'Gte. de Finanzas', en: 'Finance Manager' } },
          { value: 'comex', label: { es: 'Gte. de Comex', en: 'Foreign Trade Manager' } },
          { value: 'otro', label: { es: 'Otro', en: 'Other' } },
        ],
      },
      {
        name: 'empresa_cuit',
        type: 'text',
        label: { es: 'Empresa / CUIT', en: 'Company / Tax ID' },
        placeholder: { es: 'Ej.: ACME S.A. — 30-71234567-9', en: 'Ex: ACME Inc. — 30-71234567-9' },
        required: true,
      },
    ],
    whatsappTemplate: {
      es: 'Hola, busco asesoramiento Cambiario.\n-Desafío: {desafio_principal}\n-MULC: {operacion_mulc}\n-Traba: {descripcion_traba}\n-Cargo: {cargo}\n-Empresa/CUIT: {empresa_cuit}',
      en: 'Hello, I am looking for currency advisory.\n-Challenge: {desafio_principal}\n-MULC: {operacion_mulc}\n-Work: {descripcion_traba}\n-Role: {cargo}\n-Company/Tax ID: {empresa_cuit}',
    },
  },
  {
    id: 'evaluacion-logistica',
    eyebrow: {
      es: 'Evaluación 02',
      en: 'Assessment 02',
    },
    title: {
      es: 'Evaluación logística',
      en: 'Logistics assessment',
    },
    description: {
      es: 'Tipo de carga, corredor, volumen y consolidación. La base para dimensionar una operación con números reales.',
      en: 'Cargo type, lane, volume and consolidation. The basis for sizing an operation with real numbers.',
    },
    fields: [
      {
        name: 'tipo_carga',
        type: 'select',
        label: { es: 'Tipo de carga', en: 'Cargo type' },
        required: true,
        options: [
          { value: 'bienes_capital', label: { es: 'Bienes de Capital', en: 'Capital goods' } },
          { value: 'carga_general', label: { es: 'Carga General', en: 'General cargo' } },
          { value: 'perecederos_frio', label: { es: 'Perecederos / Frío', en: 'Perishables / Cold chain' } },
          { value: 'carga_peligrosa', label: { es: 'Carga Peligrosa', en: 'Dangerous goods' } },
        ],
      },
      {
        name: 'origen_destino',
        type: 'text',
        label: { es: 'Origen / Destino', en: 'Origin / Destination' },
        placeholder: { es: 'Ej.: Rosario → Hamburgo', en: 'Ex: Rosario → Hamburg' },
        required: true,
      },
      {
        name: 'volumen_estimado',
        type: 'text',
        label: { es: 'Volumen estimado', en: 'Estimated volume' },
        placeholder: { es: 'Ej.: 2 x 40HC mensuales', en: 'Ex: 2 x 40HC per month' },
        required: true,
      },
      {
        name: 'consolidacion_exterior',
        type: 'select',
        label: { es: '¿Consolidación exterior?', en: 'External consolidation?' },
        required: true,
        options: siNo,
      },
      {
        name: 'empresa_cuit',
        type: 'text',
        label: { es: 'Empresa / CUIT', en: 'Company / Tax ID' },
        placeholder: { es: 'Ej.: ACME S.A. — 30-71234567-9', en: 'Ex: ACME Inc. — 30-71234567-9' },
        required: false,
      },
    ],
    whatsappTemplate: {
      es: 'Hola, solicito Evaluación Logística.\n-Tipo de carga: {tipo_carga}\n-Origen/Destino: {origen_destino}\n-Volumen: {volumen_estimado}\n-Consolidación exterior: {consolidacion_exterior}\n-Empresa/CUIT: {empresa_cuit}',
      en: 'Hello, I request a Logistics Assessment.\n-Cargo type: {tipo_carga}\n-Origin/Destination: {origen_destino}\n-Volume: {volumen_estimado}\n-External consolidation: {consolidacion_exterior}\n-Company/Tax ID: {empresa_cuit}',
    },
  },
  {
    id: 'radicacion-extranjeras',
    eyebrow: {
      es: 'Evaluación 03',
      en: 'Assessment 03',
    },
    title: {
      es: 'Evaluación para radicación de empresas extranjeras',
      en: 'Assessment for foreign company establishment',
    },
    description: {
      es: 'Sector, fase y áreas de soporte. Para saber si la estructura societaria alcanza para la operación que planeás.',
      en: 'Sector, stage and support areas. To find out whether the corporate structure fits the operation you plan.',
    },
    fields: [
      {
        name: 'industria_sector',
        type: 'text',
        label: { es: 'Industria / Sector', en: 'Industry / Sector' },
        placeholder: { es: 'Ej.: Autopartes', en: 'Ex: Auto parts' },
        required: true,
      },
      {
        name: 'fase_radicacion',
        type: 'select',
        label: { es: 'Fase de radicación', en: 'Establishment stage' },
        required: true,
        options: [
          { value: 'exploracion', label: { es: 'Exploración', en: 'Exploration' } },
          { value: 'diagnostico', label: { es: 'Diagnóstico regulatorio', en: 'Regulatory assessment' } },
          { value: 'tramites', label: { es: 'Trámites societarios', en: 'Corporate formalities' } },
          { value: 'listos_operar', label: { es: 'Listos para operar', en: 'Ready to operate' } },
        ],
      },
      {
        name: 'areas_soporte',
        type: 'textarea',
        label: { es: 'Áreas de soporte requeridas', en: 'Support areas required' },
        placeholder: {
          es: 'Ej.: aduanas, bancos, logística, RRHH',
          en: 'Ex: customs, banking, logistics, HR',
        },
        required: true,
        rows: 3,
      },
      {
        name: 'importacion_bienes_capital',
        type: 'select',
        label: { es: '¿Importa bienes de capital?', en: 'Imports capital goods?' },
        required: true,
        options: siNo,
      },
      {
        name: 'empresa_pais_cargo',
        type: 'text',
        label: { es: 'Empresa / País / Cargo', en: 'Company / Country / Role' },
        placeholder: { es: 'Ej.: ACME Inc. — Alemania — CFO', en: 'Ex: ACME Inc. — Germany — CFO' },
        required: false,
      },
    ],
    whatsappTemplate: {
      es: 'Hola, requiero evaluación de Radicación.\n-Sector: {industria_sector}\n-Fase: {fase_radicacion}\n-Soporte en: {areas_soporte}\n-Imp. Bienes de Capital: {importacion_bienes_capital}\n-Datos: {empresa_pais_cargo}',
      en: 'Hello, I require an Establishment Assessment.\n-Sector: {industria_sector}\n-Stage: {fase_radicacion}\n-Support in: {areas_soporte}\n-Capital goods imports: {importacion_bienes_capital}\n-Details: {empresa_pais_cargo}',
    },
  },
  {
    id: 'nuevos-proyectos',
    eyebrow: {
      es: 'Evaluación 04',
      en: 'Assessment 04',
    },
    title: {
      es: 'Evaluación para nuevos proyectos de importación o exportación',
      en: 'Assessment for new import or export projects',
    },
    description: {
      es: 'Rubro, estado operativo y contrapartes. Para detectar los puntos de fricción antes del primer embarque.',
      en: 'Segment, operating stage and counterparties. To spot friction points before the first shipment.',
    },
    fields: [
      {
        name: 'rubro_nicho',
        type: 'text',
        label: { es: 'Rubro / Nicho', en: 'Segment / Niche' },
        placeholder: { es: 'Ej.: Maquinaria agrícola', en: 'Ex: Agricultural machinery' },
        required: true,
      },
      {
        name: 'estado_operativo',
        type: 'select',
        label: { es: 'Estado operativo', en: 'Operating stage' },
        required: true,
        options: [
          { value: 'primera_operacion', label: { es: 'Primera operación', en: 'First operation' } },
          { value: 'esporadica', label: { es: 'Operamos esporádicamente', en: 'We operate sporadically' } },
          { value: 'regular', label: { es: 'Operamos regularmente', en: 'We operate regularly' } },
        ],
      },
      {
        name: 'clientes_proveedores_definidos',
        type: 'select',
        label: { es: 'Clientes / Proveedores', en: 'Customers / Suppliers' },
        required: true,
        options: [
          { value: 'definidos', label: { es: 'Sí, ya definidos', en: 'Yes, already defined' } },
          { value: 'busqueda', label: { es: 'No, en búsqueda / negociación', en: 'No, in search / negotiation' } },
        ],
      },
      {
        name: 'pais_origen_destino',
        type: 'text',
        label: { es: 'País de origen / destino', en: 'Country of origin / destination' },
        placeholder: { es: 'Ej.: China → Argentina', en: 'Ex: China → Argentina' },
        required: true,
      },
      {
        name: 'empresa_cuit',
        type: 'text',
        label: { es: 'Empresa / CUIT', en: 'Company / Tax ID' },
        placeholder: { es: 'Ej.: ACME S.A. — 30-71234567-9', en: 'Ex: ACME Inc. — 30-71234567-9' },
        required: false,
      },
    ],
    whatsappTemplate: {
      es: 'Hola, consulto por Nuevo Proyecto Imp/Exp.\n-Rubro: {rubro_nicho}\n-Estado: {estado_operativo}\n-Contactos: {clientes_proveedores_definidos}\n-Origen/Destino: {pais_origen_destino}\n-Empresa/CUIT: {empresa_cuit}',
      en: 'Hello, I enquire about a New Import/Export Project.\n-Segment: {rubro_nicho}\n-Stage: {estado_operativo}\n-Contacts: {clientes_proveedores_definidos}\n-Origin/Destination: {pais_origen_destino}\n-Company/Tax ID: {empresa_cuit}',
    },
  },
];

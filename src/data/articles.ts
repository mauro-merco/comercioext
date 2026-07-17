export interface Article {
  slug: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  category: string;
  topics: string[];
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featured: boolean;
  heroImage: string;
  heroAlt: Record<string, string>;
  content: Record<string, string>;
  keyTakeaways: Record<string, string[]>;
  sources?: { label: string; url: string }[];
  disclaimer?: boolean;
}

export const articles: Article[] = [
  {
    slug: 'costo-invisible-cadena-logistica-fragmentada',
    title: {
      es: 'El costo invisible de una cadena logística fragmentada',
      en: 'The invisible cost of a fragmented logistics chain',
    },
    excerpt: {
      es: 'Una tarifa competitiva no garantiza una operación eficiente. Cuando cada parte decide de manera aislada, el costo final aparece en demoras, reprocesos y pérdida de previsibilidad.',
      en: 'A competitive tariff does not guarantee an efficient operation. When each part decides in isolation, the final cost appears in delays, rework, and loss of predictability.',
    },
    category: 'analysis',
    topics: ['supply-chain', 'logistics'],
    author: 'german-muchico',
    publishedAt: '2026-07-17',
    readingTime: 6,
    featured: true,
    heroImage: '/images/articles/cadena-fragmentada.jpg',
    heroAlt: {
      es: 'Contenedores y grúas en una terminal portuaria durante una operación logística',
      en: 'Containers and cranes at a port terminal during a logistics operation',
    },
    content: {
      es: `<p>Durante años, gran parte del comercio exterior se organizó como una suma de proveedores: transporte por un lado, despacho por otro, gestión bancaria en un tercer circuito y decisiones comerciales en un cuarto. Cada actor podía cumplir correctamente su tarea y, aun así, el resultado global ser deficiente.</p>

<p>El problema no siempre es la capacidad técnica. Es la falta de una visión compartida.</p>

<p>Cuando una organización compara alternativas solo por tarifa, deja fuera variables que terminan determinando el costo real: días de inventario, demoras documentales, almacenaje, cambios de ruta, capital inmovilizado, incumplimientos, pérdida de ventas y horas del equipo dedicadas a resolver excepciones.</p>

<p>Una cadena fragmentada también fragmenta la responsabilidad. La información llega tarde, las prioridades no están alineadas y cada decisión optimiza un tramo sin conocer el impacto sobre el resto. El ahorro inicial puede desaparecer frente a un único desvío.</p>

<h2>Del precio al costo total</h2>

<p>La pregunta ejecutiva no es únicamente cuánto cuesta mover una carga. Es cuánto cuesta poner la mercadería disponible, en condiciones, dentro del plazo que necesita el negocio y con un nivel de riesgo aceptable.</p>

<p>Ese enfoque cambia la conversación. Obliga a contemplar la operación completa y a trabajar con escenarios. También permite distinguir entre costos inevitables y costos generados por falta de coordinación.</p>

<h2>Integrar no significa centralizar todo</h2>

<p>Una operación end to end no exige que una sola compañía haga cada tarea. Exige que exista una arquitectura común: objetivos, responsables, hitos, información y criterios de decisión. Los especialistas pueden ser varios; la estrategia debe ser una.</p>

<p>En más de tres décadas en esta industria confirmé que la previsibilidad no surge de eliminar toda incertidumbre. Surge de identificarla temprano, asignar responsabilidades y preparar respuestas antes de que la excepción se transforme en urgencia.</p>

<p>La logística deja de ser un costo defensivo cuando forma parte de la estrategia comercial. Esa integración es la que permite crecer sin multiplicar desorden.</p>`,
      en: `<p>For years, most of foreign trade was organized as a sum of providers: transport on one side, customs clearance on another, banking management in a third circuit, and commercial decisions in a fourth. Each actor could correctly fulfill their task and yet the overall result could be deficient.</p>

<p>The problem is not always technical capability. It is the lack of a shared vision.</p>

<p>When an organization compares alternatives only by tariff, it leaves out variables that end up determining the real cost: inventory days, documentation delays, storage, route changes, immobilized capital, non-compliance, lost sales, and team hours dedicated to resolving exceptions.</p>

<p>A fragmented chain also fragments responsibility. Information arrives late, priorities are not aligned, and each decision optimizes a segment without knowing the impact on the rest. The initial savings can disappear in front of a single deviation.</p>

<h2>From price to total cost</h2>

<p>The executive question is not only how much it costs to move a load. It is how much it costs to make the merchandise available, in conditions, within the deadline the business needs and with an acceptable level of risk.</p>

<p>This approach changes the conversation. It forces consideration of the complete operation and working with scenarios. It also allows distinguishing between unavoidable costs and costs generated by lack of coordination.</p>

<h2>Integrating does not mean centralizing everything</h2>

<p>An end-to-end operation does not require a single company to do every task. It requires a common architecture: objectives, responsible parties, milestones, information, and decision criteria. Specialists can be many; the strategy must be one.</p>

<p>In more than three decades in this industry, I have confirmed that predictability does not come from eliminating all uncertainty. It comes from identifying it early, assigning responsibilities, and preparing responses before the exception becomes an urgency.</p>

<p>Logistics ceases to be a defensive cost when it is part of the commercial strategy. That integration is what allows growth without multiplying disorder.</p>`,
    },
    keyTakeaways: {
      es: [
        'El precio del transporte es solo una parte del costo total.',
        'La fragmentación multiplica zonas grises y decisiones tardías.',
        'Integrar información, responsables y escenarios permite anticipar desvíos.',
        'La logística competitiva se diseña antes de mover la carga.',
      ],
      en: [
        'Transport price is only part of the total cost.',
        'Fragmentation multiplies gray areas and late decisions.',
        'Integrating information, responsible parties, and scenarios allows anticipating deviations.',
        'Competitive logistics is designed before moving the cargo.',
      ],
    },
    disclaimer: true,
  },
  {
    slug: 'empresa-extranjera-argentina-decisiones-previas',
    title: {
      es: 'Instalar una empresa extranjera en Argentina: 10 decisiones previas a la primera operación',
      en: 'Setting up a foreign company in Argentina: 10 decisions before the first operation',
    },
    excerpt: {
      es: 'Una radicación efectiva requiere coordinar estructura societaria, cumplimiento, bancos, aduanas, abastecimiento y distribución antes de comprometer el primer flujo comercial.',
      en: 'An effective establishment requires coordinating corporate structure, compliance, banks, customs, supply, and distribution before committing to the first commercial flow.',
    },
    category: 'guides',
    topics: ['foreign-companies', 'customs'],
    author: 'equipo-editorial',
    publishedAt: '2026-07-17',
    readingTime: 8,
    featured: true,
    heroImage: '/images/articles/empresa-extranjera.jpg',
    heroAlt: {
      es: 'Vista aérea de oficinas corporativas en Buenos Aires',
      en: 'Aerial view of corporate offices in Buenos Aires',
    },
    content: {
      es: `<p>Entrar a un mercado no consiste solamente en constituir una sociedad. Para que una empresa extranjera pueda operar en Argentina necesita traducir su estrategia regional a una arquitectura local viable.</p>

<h2>1. Definir el objetivo de la presencia local</h2>

<p>No es lo mismo vender, importar, fabricar, distribuir, prestar servicios o usar Argentina como plataforma regional. La estructura debe responder al modelo comercial, no al revés.</p>

<h2>2. Validar la estructura legal y fiscal</h2>

<p>La forma societaria, la representación, los contratos y las obligaciones impositivas requieren asesoramiento profesional actualizado. Estas definiciones condicionan la operación futura.</p>

<h2>3. Mapear permisos y organismos</h2>

<p>Según el producto y la actividad pueden intervenir autoridades aduaneras, sanitarias, técnicas, ambientales u otras. El mapa regulatorio debe construirse antes de fijar una fecha comercial.</p>

<h2>4. Diseñar el circuito bancario y cambiario</h2>

<p>Pagos, cobros, financiamiento y documentación deben analizarse con información vigente. La operación bancaria no es un paso administrativo posterior: forma parte de la factibilidad.</p>

<h2>5. Determinar la clasificación y el tratamiento de mercaderías</h2>

<p>La clasificación arancelaria y las regulaciones aplicables impactan en costos, permisos, documentación y tiempos. No deben definirse por aproximación.</p>

<h2>6. Calcular el costo total</h2>

<p>Además del valor de compra y el flete, contemplar seguros, tributos, servicios, almacenaje, inventario, distribución, contingencias y costo financiero.</p>

<h2>7. Elegir el modelo logístico</h2>

<p>La decisión entre transporte aéreo, marítimo o terrestre depende del producto, el volumen, la urgencia, la variabilidad y la promesa comercial.</p>

<h2>8. Seleccionar socios y responsables</h2>

<p>Definir quién coordina, quién ejecuta, quién valida documentación y quién toma decisiones ante desvíos. La falta de gobierno genera costos aunque los proveedores sean competentes.</p>

<h2>9. Preparar escenarios</h2>

<p>Construir un escenario base y alternativas frente a demoras, cambios de demanda, restricciones, faltantes o desvíos de costo.</p>

<h2>10. Ejecutar un piloto medible</h2>

<p>Antes de escalar, validar el circuito completo con indicadores: tiempo total, desvíos, costo puesto, incidencias y aprendizaje operativo.</p>

<p>La instalación efectiva ocurre cuando todas estas decisiones funcionan como sistema. Una buena planificación no elimina la complejidad del mercado; evita descubrirla cuando la mercadería ya está en movimiento.</p>`,
      en: `<p>Entering a market is not just about establishing a company. For a foreign company to operate in Argentina, it needs to translate its regional strategy into a viable local architecture.</p>

<h2>1. Define the objective of local presence</h2>

<p>Selling, importing, manufacturing, distributing, providing services, or using Argentina as a regional platform are not the same. The structure must respond to the commercial model, not the other way around.</p>

<h2>2. Validate the legal and tax structure</h2>

<p>The corporate form, representation, contracts, and tax obligations require updated professional advice. These definitions condition future operations.</p>

<h2>3. Map permits and agencies</h2>

<p>Depending on the product and activity, customs, health, technical, or environmental authorities may be involved. The regulatory map must be built before setting a commercial date.</p>

<h2>4. Design the banking and currency circuit</h2>

<p>Payments, collections, financing, and documentation must be analyzed with current information. Banking operations are not a subsequent administrative step: they are part of feasibility.</p>

<h2>5. Determine the classification and treatment of goods</h2>

<p>Tariff classification and applicable regulations impact costs, permits, documentation, and timelines. They should not be defined by approximation.</p>

<h2>6. Calculate total cost</h2>

<p>Beyond purchase value and freight, consider insurance, taxes, services, storage, inventory, distribution, contingencies, and financial cost.</p>

<h2>7. Choose the logistics model</h2>

<p>The decision between air, sea, or land transport depends on the product, volume, urgency, variability, and commercial promise.</p>

<h2>8. Select partners and responsible parties</h2>

<p>Define who coordinates, who executes, who validates documentation, and who makes decisions in case of deviations. Lack of governance generates costs even if suppliers are competent.</p>

<h2>9. Prepare scenarios</h2>

<p>Build a base scenario and alternatives for delays, demand changes, restrictions, shortages, or cost deviations.</p>

<h2>10. Execute a measurable pilot</h2>

<p>Before scaling, validate the complete circuit with indicators: total time, deviations, landed cost, incidents, and operational learning.</p>

<p>Effective establishment occurs when all these decisions work as a system. Good planning does not eliminate market complexity; it prevents discovering it when the merchandise is already in motion.</p>`,
    },
    keyTakeaways: {
      es: [
        'La estructura societaria debe responder al modelo comercial.',
        'El circuito bancario forma parte de la factibilidad desde el inicio.',
        'El mapa regulatorio debe construirse antes de fijar una fecha comercial.',
        'Un piloto medible valida el circuito completo antes de escalar.',
      ],
      en: [
        'The corporate structure must respond to the commercial model.',
        'The banking circuit is part of feasibility from the start.',
        'The regulatory map must be built before setting a commercial date.',
        'A measurable pilot validates the complete circuit before scaling.',
      ],
    },
  },
  {
    slug: 'importar-empieza-con-diagnostico',
    title: {
      es: 'Importar no empieza con el embarque: empieza con el diagnóstico',
      en: 'Importing does not start with shipping: it starts with diagnosis',
    },
    excerpt: {
      es: 'La calidad de una importación se define mucho antes de reservar espacio: en las preguntas que una empresa es capaz de responder al principio.',
      en: 'The quality of an import is defined long before booking space: in the questions a company is able to answer at the beginning.',
    },
    category: 'opinion',
    topics: ['imports', 'logistics'],
    author: 'german-muchico',
    publishedAt: '2026-07-17',
    readingTime: 5,
    featured: false,
    heroImage: '/images/articles/importar-diagnostico.jpg',
    heroAlt: {
      es: 'Profesional analizando documentación de comercio exterior en oficina',
      en: 'Professional analyzing foreign trade documentation in office',
    },
    content: {
      es: `<p>Cuando una operación empieza por pedir una tarifa, suele faltar una conversación previa. Qué objetivo comercial persigue la importación, cuándo debe estar disponible el producto, qué variabilidad tolera el negocio y cuál es el costo de llegar tarde son preguntas anteriores al embarque.</p>

<p>La ruta más barata puede ser la más cara si obliga a sostener más inventario o rompe una promesa de venta. La alternativa más rápida puede no justificarse si el capital inmovilizado no representa un riesgo. No existe un modo universalmente mejor; existe una decisión coherente con cada negocio.</p>

<p>El diagnóstico también expone dependencias. Documentación del proveedor, clasificación, permisos, pagos, seguros, capacidad de almacenamiento y distribución local forman parte de una única secuencia. Si una pieza no está lista, adelantar otra no necesariamente acelera el resultado.</p>

<p>Por eso la consultoría logística no comienza cuando la carga se mueve. Comienza cuando se traduce una necesidad comercial en requisitos operativos, regulatorios y financieros. Recién entonces tiene sentido comparar rutas y proveedores.</p>

<p>Después de años viendo operaciones exitosas y operaciones costosas, mi conclusión es simple: una importación bien diseñada se reconoce por la calidad de sus decisiones previas. El embarque es la ejecución visible de un trabajo que empezó mucho antes.</p>`,
      en: `<p>When an operation starts by requesting a tariff, a previous conversation is usually missing. What commercial objective the import pursues, when the product must be available, what variability the business tolerates, and what the cost of being late are questions before shipping.</p>

<p>The cheapest route can be the most expensive if it forces holding more inventory or breaking a sales promise. The fastest alternative may not be justified if immobilized capital does not represent a risk. There is no universally better mode; there is a decision coherent with each business.</p>

<p>Diagnosis also exposes dependencies. Supplier documentation, classification, permits, payments, insurance, storage capacity, and local distribution are part of a single sequence. If one piece is not ready, advancing another does not necessarily accelerate the result.</p>

<p>That is why logistics consulting does not begin when cargo moves. It begins when a commercial need is translated into operational, regulatory, and financial requirements. Only then does it make sense to compare routes and providers.</p>

<p>After years of seeing successful and costly operations, my conclusion is simple: a well-designed import is recognized by the quality of its previous decisions. Shipping is the visible execution of work that started much earlier.</p>`,
    },
    keyTakeaways: {
      es: [
        'La ruta más barata puede ser la más cara si no se analiza el negocio completo.',
        'El diagnóstico expone dependencias antes de que se conviertan en problemas.',
        'La consultoría logística comienza con la traducción de necesidades comerciales.',
        'Una importación bien diseñada se reconoce por la calidad de sus decisiones previas.',
      ],
      en: [
        'The cheapest route can be the most expensive if the full business is not analyzed.',
        'Diagnosis exposes dependencies before they become problems.',
        'Logistics consulting begins with translating commercial needs.',
        'A well-designed import is recognized by the quality of its previous decisions.',
      ],
    },
    disclaimer: true,
  },
  {
    slug: 'logistica-end-to-end-que-integra',
    title: {
      es: 'Logística end to end: qué integra y qué problemas evita',
      en: 'End-to-end logistics: what it integrates and what problems it prevents',
    },
    excerpt: {
      es: 'Un enfoque end to end conecta estrategia, regulación, transporte, aduanas, bancos e información para optimizar el resultado completo.',
      en: 'An end-to-end approach connects strategy, regulation, transport, customs, banks, and information to optimize the complete result.',
    },
    category: 'guides',
    topics: ['logistics', 'supply-chain'],
    author: 'equipo-editorial',
    publishedAt: '2026-07-17',
    readingTime: 7,
    featured: false,
    heroImage: '/images/articles/logistica-end-to-end.jpg',
    heroAlt: {
      es: 'Diagrama de cadena logística integrada con múltiples puntos de conexión',
      en: 'Integrated logistics chain diagram with multiple connection points',
    },
    content: {
      es: `<p>"End to end" no significa agregar servicios a una propuesta. Significa gestionar la cadena desde el objetivo comercial hasta la disponibilidad final del producto con una lógica compartida.</p>

<h2>Qué integra</h2>

<ul>
<li>Diagnóstico de la necesidad</li>
<li>Diseño de escenarios y rutas</li>
<li>Requisitos documentales y regulatorios</li>
<li>Coordinación de origen</li>
<li>Transporte internacional</li>
<li>Seguros y gestión de riesgos</li>
<li>Despacho aduanero</li>
<li>Operativa bancaria vinculada</li>
<li>Almacenamiento y distribución</li>
<li>Seguimiento, alertas y evaluación posterior</li>
</ul>

<h2>Qué problemas busca evitar</h2>

<h3>Optimización parcial</h3>
<p>Una decisión mejora un tramo y empeora el costo total.</p>

<h3>Información fragmentada</h3>
<p>Cada proveedor maneja una versión diferente del estado de la operación.</p>

<h3>Responsabilidad difusa</h3>
<p>No existe un dueño claro de la excepción.</p>

<h3>Decisiones tardías</h3>
<p>El equipo conoce el riesgo cuando ya no puede prevenirlo.</p>

<h3>Aprendizaje perdido</h3>
<p>Se resuelve la urgencia, pero no se modifica el proceso que la generó.</p>

<h2>Cuatro fases de trabajo</h2>

<ol>
<li><strong>Diagnóstico:</strong> entender objetivos, restricciones y riesgos.</li>
<li><strong>Diseño:</strong> construir una solución específica y alternativas.</li>
<li><strong>Ejecución:</strong> coordinar hitos, información y responsables.</li>
<li><strong>Optimización:</strong> medir resultados y corregir causas.</li>
</ol>

<p>La integración no elimina especialistas ni reemplaza controles. Los conecta. Su valor aparece cuando el resultado se evalúa por desempeño global y no por el cumplimiento aislado de cada proveedor.</p>`,
      en: `<p>"End to end" does not mean adding services to a proposal. It means managing the chain from the commercial objective to the final availability of the product with a shared logic.</p>

<h2>What it integrates</h2>

<ul>
<li>Need diagnosis</li>
<li>Scenario and route design</li>
<li>Documentary and regulatory requirements</li>
<li>Origin coordination</li>
<li>International transport</li>
<li>Insurance and risk management</li>
<li>Customs clearance</li>
<li>Linked banking operations</li>
<li>Storage and distribution</li>
<li>Follow-up, alerts, and subsequent evaluation</li>
</ul>

<h2>What problems it seeks to prevent</h2>

<h3>Partial optimization</h3>
<p>A decision improves one segment and worsens the total cost.</p>

<h3>Fragmented information</h3>
<p>Each provider manages a different version of the operation status.</p>

<h3>Diffuse responsibility</h3>
<p>There is no clear owner of the exception.</p>

<h3>Late decisions</h3>
<p>The team learns of the risk when it can no longer prevent it.</p>

<h3>Lost learning</h3>
<p>The urgency is resolved, but the process that generated it is not modified.</p>

<h2>Four work phases</h2>

<ol>
<li><strong>Diagnosis:</strong> understand objectives, restrictions, and risks.</li>
<li><strong>Design:</strong> build a specific solution and alternatives.</li>
<li><strong>Execution:</strong> coordinate milestones, information, and responsible parties.</li>
<li><strong>Optimization:</strong> measure results and correct causes.</li>
</ol>

<p>Integration does not eliminate specialists or replace controls. It connects them. Its value appears when the result is evaluated by global performance and not by the isolated compliance of each provider.</p>`,
    },
    keyTakeaways: {
      es: [
        'End to end significa gestionar la cadena con una lógica compartida.',
        'La optimización parcial puede empeorar el costo total.',
        'La integración conecta especialistas, no los reemplaza.',
        'El valor se mide por desempeño global, no por cumplimiento aislado.',
      ],
      en: [
        'End to end means managing the chain with a shared logic.',
        'Partial optimization can worsen total cost.',
        'Integration connects specialists, it does not replace them.',
        'Value is measured by global performance, not isolated compliance.',
      ],
    },
  },
  {
    slug: 'previsibilidad-comercio-exterior',
    title: {
      es: 'Cómo construir previsibilidad en comercio exterior',
      en: 'How to build predictability in foreign trade',
    },
    excerpt: {
      es: 'Previsibilidad no es adivinar el futuro. Es saber qué variables importan, detectar señales a tiempo y decidir con reglas acordadas.',
      en: 'Predictability is not guessing the future. It is knowing what variables matter, detecting signals on time, and deciding with agreed rules.',
    },
    category: 'analysis',
    topics: ['supply-chain', 'markets'],
    author: 'german-muchico',
    publishedAt: '2026-07-17',
    readingTime: 6,
    featured: false,
    heroImage: '/images/articles/previsibilidad.jpg',
    heroAlt: {
      es: 'Tablero ejecutivo con indicadores de comercio exterior',
      en: 'Executive dashboard with foreign trade indicators',
    },
    content: {
      es: `<p>En comercio exterior siempre existe incertidumbre. Cambian condiciones, rutas, costos, disponibilidad y regulaciones. Esperar un escenario completamente estable es renunciar a decidir.</p>

<p>Las organizaciones más preparadas no son las que suponen que nada va a cambiar. Son las que entienden qué cambios pueden alterar su operación y diseñan respuestas posibles.</p>

<p>La previsibilidad se construye con información confiable, hitos visibles y responsables definidos. También requiere distinguir una alerta de un dato accesorio. Cuando todo se comunica como urgente, la organización pierde capacidad de priorizar.</p>

<p>Un tablero ejecutivo útil no necesita mostrar cada evento. Necesita anticipar impacto sobre disponibilidad, costo, cumplimiento y cliente. La tecnología ayuda, pero no reemplaza el criterio con el que se definieron esas alertas.</p>

<p>También hace falta memoria. Cada desvío debería dejar una mejora: una condición contractual, un control previo, una alternativa de ruta o una responsabilidad más clara. Si el equipo resuelve el mismo problema de manera repetida, no está gestionando incertidumbre; está normalizando ineficiencia.</p>

<p>Mi experiencia me enseñó que la previsibilidad no es quietud. Es capacidad de respuesta organizada. En mercados dinámicos, esa capacidad se transforma en una ventaja competitiva concreta.</p>`,
      en: `<p>In foreign trade there is always uncertainty. Conditions, routes, costs, availability, and regulations change. Expecting a completely stable scenario is giving up on deciding.</p>

<p>The most prepared organizations are not those that assume nothing will change. They are those that understand what changes can alter their operations and design possible responses.</p>

<p>Predictability is built with reliable information, visible milestones, and defined responsible parties. It also requires distinguishing an alert from an accessory datum. When everything is communicated as urgent, the organization loses prioritization capacity.</p>

<p>A useful executive dashboard does not need to show every event. It needs to anticipate impact on availability, cost, compliance, and customer. Technology helps, but does not replace the judgment with which those alerts were defined.</p>

<p>Memory is also needed. Each deviation should leave an improvement: a contractual condition, a prior control, a route alternative, or a clearer responsibility. If the team repeatedly resolves the same problem, it is not managing uncertainty; it is normalizing inefficiency.</p>

<p>My experience taught me that predictability is not stillness. It is organized response capacity. In dynamic markets, that capacity becomes a concrete competitive advantage.</p>`,
    },
    keyTakeaways: {
      es: [
        'La previsibilidad se construye con información confiable y responsables definidos.',
        'Todo comunicado como urgente pierde capacidad de priorizar.',
        'Cada desvío debería dejar una mejora en el proceso.',
        'La previsibilidad es capacidad de respuesta organizada.',
      ],
      en: [
        'Predictability is built with reliable information and defined responsible parties.',
        'Everything communicated as urgent loses prioritization capacity.',
        'Each deviation should leave an improvement in the process.',
        'Predictability is organized response capacity.',
      ],
    },
    disclaimer: true,
  },
  {
    slug: 'perecederos-logistica-parte-del-producto',
    title: {
      es: 'Perecederos: cuando la logística forma parte del producto',
      en: 'Perishables: when logistics becomes part of the product',
    },
    excerpt: {
      es: 'En una carga perecedera, tiempo, temperatura, cumplimiento y coordinación no son servicios accesorios: determinan el valor que llega al mercado.',
      en: 'In perishable cargo, time, temperature, compliance, and coordination are not accessory services: they determine the value that reaches the market.',
    },
    category: 'analysis',
    topics: ['perishables', 'logistics'],
    author: 'german-muchico',
    publishedAt: '2026-07-17',
    readingTime: 5,
    featured: false,
    heroImage: '/images/articles/perecederos.jpg',
    heroAlt: {
      es: 'Cadena de frío en operación logística de productos perecederos',
      en: 'Cold chain in perishable logistics operation',
    },
    content: {
      es: `<p>En muchas industrias la logística acompaña al producto. En perecederos, forma parte de él. Un alimento, una flor o una carga sensible puede salir de origen con calidad y perder valor si la cadena no conserva las condiciones previstas.</p>

<p>La complejidad no proviene solamente del transporte. Surge de la sincronización entre origen, documentación, autoridades, capacidad, conexiones, controles y entrega. Una demora pequeña en un tramo puede consumir el margen disponible en todos los siguientes.</p>

<p>Por eso estas operaciones deben diseñarse desde la vida útil comercial y no solo desde la distancia. La pregunta es cuánto tiempo y variación puede absorber el producto antes de afectar su calidad, su precio o su destino.</p>

<p>La especialización importa porque permite reconocer riesgos que no son evidentes para una carga general. Pero la experiencia técnica necesita una visión integral: si la documentación, la capacidad o la recepción no están alineadas, una buena ejecución aislada no alcanza.</p>

<p>La cadena de frío es, en definitiva, una cadena de confianza. Cada eslabón recibe una condición que debe preservar y demostrar. Cuando esa responsabilidad se comparte con información clara, la logística protege el valor del producto y la reputación de toda la operación.</p>`,
      en: `<p>In many industries, logistics accompanies the product. In perishables, it is part of it. A food, a flower, or a sensitive load can leave its origin with quality and lose value if the chain does not preserve the planned conditions.</p>

<p>Complexity does not only come from transport. It arises from synchronization between origin, documentation, authorities, capacity, connections, controls, and delivery. A small delay in one segment can consume the margin available in all the following ones.</p>

<p>That is why these operations must be designed from commercial shelf life and not just from distance. The question is how much time and variation the product can absorb before affecting its quality, price, or destination.</p>

<p>Specialization matters because it allows recognizing risks that are not evident for general cargo. But technical experience needs an integral vision: if documentation, capacity, or reception are not aligned, good isolated execution is not enough.</p>

<p>The cold chain is, ultimately, a chain of trust. Each link receives a condition it must preserve and demonstrate. When that responsibility is shared with clear information, logistics protects the product's value and the reputation of the entire operation.</p>`,
    },
    keyTakeaways: {
      es: [
        'En perecederos, la logística forma parte del producto.',
        'La sincronización entre origen, documentación y entrega es crítica.',
        'La cadena de frío es una cadena de confianza.',
        'La experiencia técnica necesita una visión integral para ser efectiva.',
      ],
      en: [
        'In perishables, logistics is part of the product.',
        'Synchronization between origin, documentation, and delivery is critical.',
        'The cold chain is a chain of trust.',
        'Technical experience needs an integral vision to be effective.',
      ],
    },
    disclaimer: true,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((a) => a.category === category);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getRelatedArticles(article: Article, count = 3): Article[] {
  return articles
    .filter((a) => a.slug !== article.slug && a.topics.some((t) => article.topics.includes(t)))
    .slice(0, count);
}

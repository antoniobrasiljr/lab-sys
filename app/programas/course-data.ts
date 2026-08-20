export type CourseSession = {
  date: string;
  guest?: string;
  affiliation?: string;
  title: string;
  note?: string;
  readings?: string[];
  break?: boolean;
};

export type CourseModule = {
  code: string;
  title: string;
  signal: string;
  sessions: CourseSession[];
};

export const condensedSyllabus = [
  "A disciplina discute como a sociedade contemporânea observa e descreve a si mesma por meio de grandes temas, conceitos e distinções de sentido — indivíduo, liberdade, igualdade, diferença, risco, autenticidade, autonomia, identidade, crise. O objetivo é compreender por que certas formas semânticas são selecionadas como dignas de conservação, repetição e reelaboração, enquanto outras são esquecidas, desativadas ou reintroduzidas sob novas condições comunicativas.",
  "A partir da Teoria Geral dos Sistemas Sociais, o curso examina a relação entre semântica, estrutura societal e autodescrição. A semântica será tratada como estoque de formas de sentido disponíveis à comunicação; as estruturas sociais, como estruturas de expectativas que tornam certos enlaces comunicativos mais ou menos prováveis. Essa relação não será tomada como reflexo direto entre ideias e sociedade, mas como problema histórico e sociológico: como formas semânticas se estabilizam, circulam, perdem plausibilidade ou retornam em novos contextos?",
  "O curso dará atenção especial às transformações recentes da comunicação digital, da datificação e da comunicação artificial e algorítmica. O digital será abordado como transformação nos meios de difusão, nas condições de participação, nas formas de memória e nos instrumentos de auto-observação social, sem pressupor que ele inaugure uma sociedade pós-funcional. Algoritmos, modelos generativos, plataformas, sistemas de recomendação e dispositivos de classificação serão analisados a partir de sua participação em eventos comunicativos e de seus efeitos sobre a circulação e estabilização de semânticas.",
  "A disciplina contará com convidados do Brasil e da América Latina e buscará tensionar a Teoria Geral dos Sistemas Sociais em diálogo com objetos empíricos, teorias concorrentes e diagnósticos contemporâneos. Ao final, espera-se que as/os estudantes sejam capazes de observar como certas formas de sentido se tornam socialmente disponíveis, por quais meios se propagam, em que estruturas de expectativas se apoiam, que formas de memória ativam e que possibilidades de comunicação tornam mais ou menos prováveis.",
];

export const expandedSyllabus = [
  {
    code: "01",
    title: "O problema das autodescrições",
    paragraphs: [
      "De que modo as transformações da sociedade contemporânea dizem respeito também às formas pelas quais ela observa e descreve a si mesma por meio de grandes temas, conceitos e distinções de sentido — indivíduo, liberdade, igualdade, diferença, risco, autenticidade, autonomia, identidade, crise? Por que determinadas formas semânticas são selecionadas como dignas de conservação, repetição e reelaboração, enquanto outras são relegadas à indiferença, à obsolescência ou ao esquecimento? Como essas seleções feitas no estoque semântico disponível às auto-observações e autodescrições da sociedade se relacionam com transformações nas estruturas de expectativas que tornam prováveis — ou improváveis — certos enlaces comunicativos?",
      "Essas perguntas não são novas. Elas acompanham longos debates das ciências sociais sobre a relação entre ideias e sociedade, cultura e estrutura, conhecimento e ordem social. Voltar a elas, no entanto, permite discutir não apenas como a sociedade contemporânea lida com seus dilemas atuais, mas também como recorre à memória social, reativa semânticas antigas, estabiliza novas distinções e redefine estruturas de expectativas. Nesse sentido, a questão não é somente saber quais ideias circulam, mas observar como determinadas formas de sentido se tornam socialmente reutilizáveis, como são conservadas, transformadas, digitalizadas, esquecidas ou reintroduzidas sob novas condições comunicativas.",
    ],
  },
  {
    code: "02",
    title: "A provocação sistêmica",
    paragraphs: [
      "A proposta deste curso é tomar essas perguntas como guia para um debate sobre diferentes temas que a sociedade contemporânea utiliza para observar seus próprios problemas. O curso o fará a partir de um campo de diálogo comum — embora internamente heterogêneo — com a Teoria Geral dos Sistemas Sociais. Desenvolvida por Niklas Luhmann a partir dos anos 1960, reformulada decisivamente com o giro comunicativo e autopoiético dos anos 1980 e radicalizada nos anos 1990 com a teoria da observação e da forma, essa perspectiva segue sendo reelaborada por uma recepção internacional, com presença relevante na América Latina.",
      "Em uma de suas formulações, Luhmann compreende por semântica aquelas observações, isto é, distinções dotadas de sentido, que são reconhecidas como dignas de conservação e colocadas à disposição para serem repetidas (Luhmann, 1980). A repetição da semântica, contudo, não deve ser pressuposta como algo evidente. Ela precisa ser explicada. Em uma sociedade marcada por elevada complexidade, por diferenciação funcional e por crescente aceleração dos meios de difusão, a questão “o que é?” desloca-se para “como se seleciona?”, “como se conserva?”, “como se esquece?”, “como se generaliza?” e “sob quais condições uma forma semântica pode voltar a ser utilizada em novos contextos comunicativos?”.",
      "Se a relação entre ideias e sociedade acompanha a sociologia desde seus inícios, sua redescrição nos termos da distinção entre semântica e estrutura societal permite observá-la a partir de outro ângulo. Não se trata de conceber ideias como reflexos de estruturas sociais, nem estruturas sociais como simples materializações de ideias. Trata-se, antes, de investigar como a sociedade, operando no meio do sentido, produz, conserva e transforma formas semânticas que tornam possíveis suas auto-observações. Essa relação, contudo, não será tomada como solução teórica estabilizada. Ao contrário, será tratada como problema de investigação: como pensar a correlação, a defasagem, a antecipação, a persistência ou a reativação de semânticas em relação a mudanças nas estruturas de expectativas da sociedade? Aqui, a própria relação entre estrutura societal e semântica será entendida como problema teórico ainda aberto, e não como chave explicativa já resolvida (Calise, 2023).",
    ],
  },
  {
    code: "03",
    title: "Semântica, estrutura e história",
    paragraphs: [
      "Em primeiro lugar, tanto a semântica quanto as estruturas sociais são fenômenos dotados de sentido. A semântica pode ser entendida como o conjunto de condensações de sentido relativamente disponíveis para a comunicação — conceitos, distinções, temas, fórmulas, narrativas e autodescrições. As estruturas sociais, por sua vez, não são substratos materiais externos ao sentido, mas estruturas de expectativas que restringem e probabilizam enlaces comunicativos. Isso não significa negar a relevância de condições materiais, técnicas, corporais, ecológicas ou institucionais da comunicação. Significa apenas recusar que elas possam explicar, de modo direto e linear, a variação semântica da sociedade. Sociologicamente, tais condições importam quando são observadas, tematizadas, acopladas ou incorporadas aos processos comunicativos.",
      "Em segundo lugar, a distinção semântica/estrutura societal exige levar a sério o pressuposto da complexidade. Não há correspondência ponto a ponto entre ideias e estruturas. O estoque semântico disponível à sociedade é heterogêneo, redundante, desigual, conflitivo e internamente inconsistente. Em uma sociedade funcionalmente diferenciada, não há centro, sujeito coletivo ou supersistema capaz de integrar todas as observações produzidas por sistemas funcionais, organizações, interações, movimentos de protesto e meios de comunicação. Por isso, a sociedade moderna pode simultaneamente conservar semânticas incompatíveis entre si, reativar distinções antigas sob novas condições e produzir descrições contraditórias de si mesma sem que isso resulte em paralisia comunicativa.",
      "Em terceiro lugar, a relação entre semântica e estrutura societal é necessariamente histórica. O estoque semântico se altera com as transformações da sociedade, mas não o faz de modo linear, sincrônico ou unidirecional. Certas semânticas podem antecipar mudanças estruturais, preparando o terreno para formas de agir e experimentar até então improváveis. Outras podem sobreviver à perda de seus pressupostos sociais originários, sendo reutilizadas em novos contextos. Outras ainda podem ser esquecidas, arquivadas, banalizadas, reaproveitadas ironicamente ou convertidas em repertórios disponíveis para novas autodescrições. A disciplina buscará explorar precisamente essas temporalidades cruzadas: conservação e inovação, repetição e variação, memória e esquecimento, obsolescência e reentrada.",
    ],
  },
  {
    code: "04",
    title: "Da ação à comunicação",
    paragraphs: [
      "A Teoria Geral dos Sistemas Sociais oferece, por sua arquitetura conceitual, uma base particularmente produtiva para essa investigação. Ao articular conceitos como comunicação, sentido, complexidade, contingência, seleção, observação, diferenciação, memória, estrutura e autodescrição, ela permite observar a sociedade contemporânea sem recorrer a fundamentos subjetivistas, normativos ou ontológicos. O ponto de partida não é o sujeito que pensa a sociedade, nem a cultura que expressa uma totalidade social, mas a comunicação que, ao operar, seleciona informação, ato de comunicar e compreensão, reproduzindo sistemas sociais e estabilizando expectativas.",
      "Essa orientação comunicativa é decisiva para o curso. O deslocamento da sociologia da ação para uma sociologia da comunicação não implica negar os indivíduos, a consciência, os corpos ou as técnicas. Implica redefinir o limiar de irreduzibilidade do social: o social não se constitui como soma de consciências, nem como expressão de uma subjetividade coletiva, mas como emergência comunicativa (Pignuoli Ocampo, 2012; 2015). A partir daí, torna-se possível observar como formas semânticas circulam, estabilizam-se e se transformam independentemente da intenção de sujeitos particulares, ainda que sempre em acoplamento com sistemas psíquicos, organizações, suportes técnicos e condições materiais de difusão.",
    ],
  },
  {
    code: "05",
    title: "Digitalização e auto-observação",
    paragraphs: [
      "Esse quadro se torna especialmente relevante diante da digitalização massiva da comunicação. O meio digital não será abordado como mera ferramenta técnica, nem como causa de uma nova etapa total da sociedade. Ele será tratado como transformação nas condições de propagação, participação, memória e observação da comunicação. A digitalização amplia a capacidade de registrar, recombinar, versionar, rastrear, arquivar, indexar e redistribuir eventos comunicativos. Com isso, altera as formas de circulação das semânticas sociais, intensifica disputas por visibilidade, multiplica instrumentos de auto-observação e torna observáveis processos que antes permaneciam dispersos ou de difícil agregação.",
      "Ao mesmo tempo, o curso evitará dois obstáculos recorrentes na análise das tecnologias digitais: o tecnologicismo e o sociologicismo. O primeiro reduz a comunicação digital às propriedades técnicas dos dispositivos, plataformas, bancos de dados ou algoritmos. O segundo trata essas tecnologias como simples variáveis dependentes de estruturas sociais preexistentes. Em lugar disso, a disciplina buscará observar como as tecnologias digitais participam da comunicação ao reordenar possibilidades de seleção, difusão, armazenamento, comparação e generalização de sentido, sem por isso substituir a operação comunicativa como unidade sociológica de análise (Pignuoli Ocampo, 2022).",
    ],
  },
  {
    code: "06",
    title: "Comunicação artificial e algorítmica",
    paragraphs: [
      "Nesse ponto, a discussão recente sobre comunicação artificial e comunicação algorítmica será especialmente importante. Se a comunicação digital consiste na digitalização integral das seleções comunicativas, a comunicação artificial pode ser entendida como aquela em que ao menos uma das seleções sintetizadas comunicativamente é atualizada por uma instância não humana. Já a comunicação algorítmica permite observar de modo mais específico a participação de dispositivos capazes de processar autonomamente informação e introduzir perspectivas de interlocução no mundo social (Esposito, 2022; Pignuoli Ocampo, 2025). Com isso, algoritmos, modelos generativos e dispositivos de inteligência artificial deixam de ser analisados apenas como instrumentos externos e passam a ser observados a partir de sua participação em eventos comunicativos.",
      "Essa participação não significa que algoritmos se tornem sujeitos, consciências ou atores no sentido humanista tradicional. Significa que determinadas formas de comunicação passam a envolver seleções produzidas por dispositivos técnicos capazes de participar da atualização de informação, ato de comunicar ou compreensão. O problema sociológico, portanto, não é saber se a inteligência artificial “pensa”, “quer” ou “age” como um humano, mas observar sob quais condições técnicas, mediais e operacionais ela participa da comunicação, que irritações produz nos sistemas sociais e como interfere na circulação, seleção e estabilização de semânticas.",
      "Fenômenos como big data, datificação, plataformas digitais, redes sociais, sistemas de recomendação, modelos generativos, dispositivos de classificação algorítmica e formas automatizadas de avaliação científica, jurídica, administrativa ou cultural serão tratados, assim, como pontos de entrada para uma sociologia das transformações contemporâneas da comunicação. Interessa observar como essas infraestruturas não apenas difundem conteúdos, mas também organizam visibilidades, produzem rastros, estabilizam métricas, modulam expectativas e participam da construção de autodescrições sociais. A sociedade passa a observar a si mesma, em parte, por meio de dados, rankings, padrões, predições, perfis, indicadores e respostas automatizadas.",
      "Isso não implica afirmar que a digitalização, a comunicação artificial ou a comunicação algorítmica tenham substituído a diferenciação funcional como forma primária da sociedade moderna. Ao contrário, uma das hipóteses de trabalho do curso é que tais transformações incidem sobretudo sobre os meios de difusão, as condições de participação, as formas organizacionais e as modalidades de auto-observação social. Seus efeitos sobre sistemas funcionais — ciência, política, direito, economia, educação, religião, arte, saúde — precisam ser investigados caso a caso, considerando os códigos, programas e estruturas próprias de cada sistema. A digitalização não elimina a diferenciação funcional; ela a irrita, a reconfigura em certos pontos e amplia suas possibilidades de observação recursiva.",
    ],
  },
  {
    code: "07",
    title: "Teoria em situação de prova",
    paragraphs: [
      "A disciplina contará com a participação de convidados do Brasil e da América Latina, que apresentarão pesquisas em diálogo com esse conjunto de problemas. O objetivo é discutir formas de compreensão da circulação, seleção, estabilização, digitalização e generalização das semânticas sociais, bem como tensionar a Teoria Geral dos Sistemas Sociais em contato com outros programas teóricos, objetos empíricos e diagnósticos contemporâneos. Não se trata de aplicar a TGSS como vocabulário fechado, mas de testá-la diante de problemas atuais: a semântica da crise, os conflitos em torno da identidade e da diferença, as transformações da liberdade e da autonomia, a datificação da vida social, a comunicação artificial, a inteligência algorítmica, a reorganização da memória social e as novas formas pelas quais a sociedade descreve a si mesma.",
      "Ao final, espera-se que o curso ofereça às/aos estudantes instrumentos conceituais para observar a sociedade contemporânea a partir de seus próprios processos comunicativos de auto-observação. Mais do que perguntar se certas ideias são verdadeiras, falsas, progressistas, regressivas, emancipadoras ou conservadoras, a disciplina perguntará como elas se tornam socialmente disponíveis, por quais meios se propagam, em que estruturas de expectativas se apoiam, que formas de memória ativam, que esquecimentos produzem e que possibilidades de comunicação tornam mais ou menos prováveis.",
    ],
  },
];

export const courseModules: CourseModule[] = [
  {
    code: "M01",
    title: "Introdução à teoria dos sistemas",
    signal: "sistema → comunicação → autopoiese",
    sessions: [
      {
        date: "17 · 24 · 31/08",
        title: "Apresentação do curso",
        note: "Três encontros de abertura e construção do vocabulário comum.",
        readings: [
          "LUHMANN, Niklas. “Prefácio”, “Introdução — Mudança de paradigma na Teoria dos Sistemas” e “Capítulo 1 — Sistema e função”. In: Sistemas Sociais. Esboço de uma teoria geral. Petrópolis: Vozes, 2016.",
          "LUHMANN, Niklas. Aulas III, IX, X e XII. In: Introdução à Teoria dos Sistemas. Petrópolis: Vozes, 2011.",
          "PIGNUOLI OCAMPO, Sergio. El sistema social como sistema autopoiético comunicativamente clausurado. Entramados y Perspectivas, v. 4, n. 4, p. 167–190, 2014.",
          "PIGNUOLI OCAMPO, Sergio. El programa sociológico de Niklas Luhmann y su contexto. Revista Mexicana de Sociología, v. 77, n. 2, p. 301–328, 2015.",
          "PIGNUOLI OCAMPO, Sergio. El modelo sintético de comunicación de Niklas Luhmann. Cinta de Moebio, n. 47, p. 59–73, 2013. DOI: 10.4067/S0717-554X2013000200001.",
        ],
      },
    ],
  },
  {
    code: "M02",
    title: "Comunicação digital, mídias sociais e algoritmos",
    signal: "difusão → seleção → inteligência",
    sessions: [
      { date: "07/09", title: "Feriado", break: true },
      { date: "14/09", guest: "Sergio Pignuoli Ocampo", affiliation: "UBA · CONICET", title: "Comunicação artificial e legitimação" },
      {
        date: "21/09",
        guest: "Antonio Luz Costa",
        affiliation: "UESC",
        title: "Algoritmos da sociedade",
        readings: [
          "COSTA, Antônio Luz. Algoritmos da sociedade. MAD, n. 53, p. 8–29, 2025. DOI: 10.5354/0719-0527.2025.82294.",
          "COSTA, Antônio Luz. Like/dislike como metacódigo moral e acelerador social. Latitude, v. 16, n. 2, p. 29–52, 2022. DOI: 10.28998/lte.2022.n.2.13723.",
          "COSTA, Antônio Luz. Attributing meaning to algorithms. In: BECKER, Ralph M.; COSTA, Antônio Luz; VENTIMIGLIA, Andrew (org.). Global Perspectives on Animism and Autonomous Technologies. Cham: Springer, 2025. p. 117–143. DOI: 10.1007/978-3-031-88209-8_6.",
        ],
      },
      {
        date: "28/09",
        guest: "Santiago Calise",
        affiliation: "UBA · CONICET",
        title: "Algoritmos y el funcionamiento de los LLMs",
        readings: ["CALISE, Santiago. Algoritmos y modelos: sobre la participación de la inteligencia artificial en la comunicación (no prelo)."],
      },
      {
        date: "05/10",
        guest: "Artur Stamford",
        affiliation: "UFPE",
        title: "Sociedade algorítmica, direito e decisão jurídica",
        readings: [
          "STAMFORD DA SILVA, Artur; PINHEIRO, Álvaro Farias; MASSA, Ricardo. Legal decision-making in algorithmic society: observations on techno-animism and communicactivation. In: Global Perspectives on Animism and Autonomous Technologies. Springer, 2025. DOI: 10.1007/978-3-031-88209-8.",
          "STAMFORD DA SILVA, Artur. El derecho de la sociedad algorítmica. Revista MAD, n. 53, p. 151–169, 2025.",
        ],
      },
      { date: "12/10", title: "Feriado", break: true },
      {
        date: "19/10",
        guest: "Emerson Palmieri",
        title: "Efeito bolha e algoritmos",
        readings: [
          "PALMIERI, Emerson Rodrigues da Cunha. Social media, echo chambers and contingency: a system theoretical approach about communication in the digital space. Kybernetes, v. 53, n. 8, p. 2593–2604, 2024. DOI: 10.1108/K-12-2022-1650.",
          "PALMIERI, Emerson; BRASIL JR., Antônio. A teoria dos sistemas sociais e os estudos sobre IA e algoritmos: uma proposta de mapeamento. MAD, n. 53, p. 30–50, 2025. DOI: 10.5354/0719-0527.2025.82295.",
        ],
      },
    ],
  },
  {
    code: "M03",
    title: "Desafios contemporâneos da ciência",
    signal: "dados → métricas → autodescrição",
    sessions: [
      { date: "26/10", guest: "Liliana Ramirez", affiliation: "UNAM", title: "Gênero e ciência" },
      { date: "02/11", title: "Feriado", break: true },
      {
        date: "09/11",
        guest: "Gastón Becerra",
        affiliation: "Universidad de Flores · UBA · CONICET",
        title: "Hacia una sociología de los datos",
        readings: [
          "BECERRA, Gastón. Elementos para una sociología de los datos, la datificación y el big data. MAD, n. 53, p. 63–79, 2025.",
          "KITCHIN, Rob. Big Data, new epistemologies and paradigm shifts. Big Data & Society, v. 1, n. 1, 2014. DOI: 10.1177/2053951714528481.",
        ],
      },
      { date: "16/11", guest: "Rosario Rogel", title: "Ciencia y autoevaluación algorítmica" },
      { date: "23/11", guest: "Agustín Zanotti", title: "Wikipedia, dos bots à IA" },
    ],
  },
  {
    code: "M04",
    title: "Semânticas e estruturas sociais",
    signal: "memória → diferença → sociedade",
    sessions: [
      { date: "30/11", guest: "Juan Pedro Blois", affiliation: "UNGS · CONICET", title: "La digitalización de la psicoterapia" },
      { date: "07/12", guest: "Roberto Dutra", affiliation: "UENF", title: "Desigualdades sociais e semânticas sobre a formação da sociedade brasileira" },
    ],
  },
];

export const references = [
  "BARALDI, Claudio; CORSI, Giancarlo; ESPOSITO, Elena. Unlocking Luhmann: A Keyword Introduction to Systems Theory. Bielefeld: Bielefeld University Press, 2021.",
  "BECERRA, Gastón. Elementos para una sociología de los datos, la datificación y el big data. MAD, n. 53, p. 63–79, 2025.",
  "CALISE, Santiago Gabriel. Estructura societal y semántica en la sociología de Niklas Luhmann. Revista Mexicana de Sociología, v. 85, n. 4, p. 823–855, 2023.",
  "COSTA, Antônio Luz. Algoritmos da sociedade. MAD, n. 53, p. 8–29, 2025.",
  "ESPOSITO, Elena. Artificial Communication: How Algorithms Produce Social Intelligence. Cambridge: MIT Press, 2022.",
  "LUHMANN, Niklas. Sistemas sociales: Lineamientos para una teoría general. México: Universidad Iberoamericana; Barcelona: Anthropos, 1998.",
  "LUHMANN, Niklas. La ciencia de la sociedad. México: Universidad Iberoamericana; Guadalajara: ITESO; Barcelona: Anthropos, 1996.",
  "LUHMANN, Niklas. Die Gesellschaft der Gesellschaft. Frankfurt am Main: Suhrkamp, 1997.",
  "LUHMANN, Niklas. Gesellschaftsstruktur und Semantik: Studien zur Wissenssoziologie der modernen Gesellschaft. Frankfurt am Main: Suhrkamp, 1980.",
  "MASCAREÑO, Aldo. Construct this! O por qué el constructivismo sistémico es real. Revista MAD, n. 23, p. 9–24, 2010.",
  "PALMIERI, Emerson Rodrigues da Cunha. Social media, echo chambers and contingency: a system theoretical approach about communication in the digital space. Kybernetes, v. 53, n. 8, p. 2593–2604, 2024. DOI: 10.1108/K-12-2022-1650.",
  "PALMIERI, Emerson; BRASIL JR., Antônio. A teoria dos sistemas sociais e os estudos sobre IA e algoritmos: uma proposta de mapeamento. MAD, n. 53, p. 30–50, 2025. DOI: 10.5354/0719-0527.2025.82295.",
  "PIGNUOLI OCAMPO, Sergio. Los modelos de irreductibilidad social en la teoría sistémica de Niklas Luhmann. Revista Española de Sociología, n. 17, p. 27–48, 2012.",
  "PIGNUOLI OCAMPO, Sergio. El modelo sintético de comunicación de Niklas Luhmann. Cinta de Moebio, n. 47, p. 59–73, 2013.",
  "PIGNUOLI OCAMPO, Sergio. Doble contingencia y orden social desde la teoría de sistemas de Niklas Luhmann. Sociológica, v. 28, n. 78, p. 7–40, 2013.",
  "PIGNUOLI OCAMPO, Sergio. El programa sociológico de Niklas Luhmann y su contexto. Revista Mexicana de Sociología, v. 77, n. 2, p. 301–328, 2015.",
  "PIGNUOLI OCAMPO, Sergio. Comunicación digital: definición operativa y aproximación a la participación bajo la forma inclusión/exclusión digital. MAD, n. 46, p. 70–83, 2022.",
  "PIGNUOLI OCAMPO, Sergio. Para uma sociologia da comunicação artificial: condições, tipos e impactos na sociedade. Sociologia & Antropologia, v. 15, n. 2, e250025, 2025.",
  "PIGNUOLI OCAMPO, Sergio. ¿Legitimación artificial? Posibilidades, paradojas e ironías de la relación entre comunicación digital y legitimación mediante procedimientos. MAD, n. 53, p. 130–150, 2025.",
  "ROGEL-SALAZAR, Rosario. De la imprenta al algoritmo: reconfiguración sistémica de la autoevaluación científica. MAD, n. 53, p. 80–107, 2025.",
];

export const resources = [
  {
    code: "AV.01",
    type: "curso gravado",
    language: "espanhol",
    title: "Cátedra Niklas Luhmann e a sociologia da modernidade",
    source: "Carrera de Sociología · UBA",
    description: "Registro integral do curso de verão da cátedra argentina, com uma entrada sistemática na arquitetura da teoria e em sua leitura da modernidade.",
    href: "https://www.youtube.com/watch?v=L4el0ADKR3g",
  },
  {
    code: "AV.02",
    type: "canal",
    language: "português · espanhol",
    title: "Moinho Jurídico",
    source: "Centro de Ciências Jurídicas · UFPE",
    description: "Acervo de seminários, grupos de leitura e conversas sobre teoria dos sistemas, decisão, sociologia do direito e sociedade complexa.",
    href: "https://www.youtube.com/@MoinhoJur%C3%ADdico",
  },
  {
    code: "AV.03",
    type: "seminário de atualização",
    language: "espanhol",
    title: "Atualização em teoria dos sistemas sociais",
    source: "Sergio Pignuoli Ocampo · Cátedra Niklas Luhmann · UBA",
    description: "Seminários e aulas de atualização da cátedra da Universidad de Buenos Aires, com discussões conceituais e desenvolvimentos contemporâneos da teoria dos sistemas sociais.",
    href: "https://www.youtube.com/@sergiopignuoliocampo2911",
  },
  {
    code: "AV.04",
    type: "seminário contínuo",
    language: "espanhol",
    title: "Sistemas sociais, redes e complexidade",
    source: "Carlos Sedano · Universidad de Guadalajara",
    description: "Canal do seminário internacional coordenado por Carlos Sedano, com conferências semanais e um amplo arquivo de pesquisadoras e pesquisadores latino-americanos.",
    href: "https://www.youtube.com/user/7ghja",
  },
  {
    code: "AV.05",
    type: "ciclo internacional",
    language: "português",
    title: "Niklas Luhmann: teoria, legado e pesquisa",
    source: "Ateliê de Humanidades",
    description: "Ciclo de encontros com diferentes especialistas, útil para contrastar entradas conceituais e usos contemporâneos da teoria dos sistemas sociais.",
    href: "https://www.youtube.com/watch?v=9pBTGITQPYs",
  },
  {
    code: "AV.06",
    type: "índice aberto",
    language: "espanhol · multilíngue",
    title: "Recursos educativos sobre Luhmann",
    source: "Rosario Rogel · CC BY 4.0",
    description: "Mapa aberto de cursos, conferências, oficinas e materiais didáticos — incluindo UBA, Moinho Jurídico e outras iniciativas latino-americanas.",
    href: "https://rosariorogel.net/luhmann/oer",
  },
];

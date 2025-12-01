// app/lib/exchangeLife.ts

export type ArcStep = {
    title: string;
    description: string;
  };
  
  export type ArcTemplates = {
    admit: ArcStep[];
    renounce: ArcStep[];
    confess: ArcStep[];
  };
  
  export type Module = {
    slug: string;
    order: number;
    title: string;
    estimatedMinutes: number;
    summary: string;
    goals: string[];
    keyConcepts: string[];
    scriptureRefs: string[];
    journalPrompts: string[];
    arcTemplates: ArcTemplates;
    requiresLeader?: boolean;
  };
  
  export const MODULES: Module[] = [
    {
      slug: "module-1",
      order: 1,
      title: "Module 1 – The Exchanged Life",
      estimatedMinutes: 45,
      summary:
        "An overview of the Exchanged Life and what it means to trade our strength for Christ’s life in us.",
      goals: [
        "Introduce the Exchanged Life framework.",
        "Help Kevin see that Christ is the source of true life and freedom.",
      ],
      keyConcepts: [
        "Christ in you, the hope of glory.",
        "You cannot live the Christian life in your own strength.",
      ],
      scriptureRefs: [
        "Galatians 2:20",
        "Colossians 1:27",
        "John 15:5",
      ],
      journalPrompts: [
        "Lord Jesus, where have I been trying to live the Christian life in my own strength?",
        "What would it look like for You to live Your life through me today?",
      ],
      arcTemplates: {
        admit: [
          {
            title: "Admit your need",
            description:
              "Lord, I admit that in my own strength I cannot live the Christian life.",
          },
        ],
        renounce: [
          {
            title: "Renounce self-reliance",
            description:
              "I renounce the lie that I have to perform for Your acceptance.",
          },
        ],
        confess: [
          {
            title: "Confess truth",
            description:
              "I confess that Christ lives in me and is my life and my righteousness.",
          },
        ],
      },
    },
    {
      slug: "module-2",
      order: 2,
      title: "Module 2 – Identity in Christ",
      estimatedMinutes: 45,
      summary:
        "Explores who you are in Christ and how your true identity changes the way you live.",
      goals: [
        "Help Kevin see himself as God sees him in Christ.",
        "Begin replacing old labels with God’s truth.",
      ],
      keyConcepts: [
        "New creation in Christ.",
        "Accepted, secure, and significant in Him.",
      ],
      scriptureRefs: ["2 Corinthians 5:17", "Ephesians 1:3-14"],
      journalPrompts: [
        "Lord, which old labels or identities do You want to replace?",
        "What truths about who I am in You are hardest for me to believe?",
      ],
      arcTemplates: {
        admit: [
          {
            title: "Admit false identities",
            description:
              "Lord, I admit I’ve believed lies about who I am apart from You.",
          },
        ],
        renounce: [
          {
            title: "Renounce the lies",
            description:
              "I renounce the labels and accusations that don’t agree with Your Word.",
          },
        ],
        confess: [
          {
            title: "Confess who you are in Christ",
            description:
              "I confess that I am who You say I am—accepted, loved, and made new in Christ.",
          },
        ],
      },
    },
    {
      slug: "module-3",
      order: 3,
      title: "Module 3 – Strongholds & Agreements",
      estimatedMinutes: 60,
      summary:
        "Identifying lies and strongholds that keep you from walking in the freedom of Christ.",
      goals: [
        "Name specific strongholds and agreements.",
        "Invite Jesus into those places with His truth.",
      ],
      keyConcepts: [
        "Strongholds as deeply-held lies.",
        "Taking thoughts captive to Christ.",
      ],
      scriptureRefs: ["2 Corinthians 10:3-5", "Romans 12:2"],
      journalPrompts: [
        "Lord, show me any lie I’ve agreed with about You, myself, or others.",
        "What is one place You want to begin tearing down strongholds today?",
      ],
      arcTemplates: {
        admit: [
          {
            title: "Admit the stronghold",
            description:
              "Lord, I admit I’ve been holding onto this pattern of thinking and behaving.",
          },
        ],
        renounce: [
          {
            title: "Renounce the agreement",
            description:
              "In Jesus’ name I renounce this lie and break agreement with it.",
          },
        ],
        confess: [
          {
            title: "Confess God’s truth",
            description:
              "I confess and receive the truth of Your Word in place of this lie.",
          },
        ],
      },
    },
    {
      slug: "module-4",
      order: 4,
      title: "Module 4 – Forgiveness & Freedom",
      estimatedMinutes: 60,
      summary:
        "Walking through forgiveness with Jesus as a doorway into deeper freedom.",
      goals: [
        "Understand biblical forgiveness.",
        "Begin forgiving specific people with Jesus.",
      ],
      keyConcepts: [
        "Forgiveness as an act of obedience and trust.",
        "Releasing others into God’s hands.",
      ],
      scriptureRefs: ["Ephesians 4:31-32", "Matthew 18:21-35"],
      journalPrompts: [
        "Lord, who do I still need to forgive?",
        "What do I need to release to You about this person or situation?",
      ],
      arcTemplates: {
        admit: [
          {
            title: "Admit the hurt",
            description:
              "Lord, I admit how deeply this has hurt me and how I’ve held onto it.",
          },
        ],
        renounce: [
          {
            title: "Renounce bitterness",
            description:
              "I renounce bitterness, revenge, and the right to punish this person.",
          },
        ],
        confess: [
          {
            title: "Confess forgiveness",
            description:
              "By faith, in Jesus’ name, I choose to forgive as You have forgiven me.",
          },
        ],
      },
    },
    {
      slug: "module-5",
      order: 5,
      title: "Module 5 – Walking in the Spirit",
      estimatedMinutes: 45,
      summary:
        "Living daily in dependence on the Holy Spirit and the life of Christ in you.",
      goals: [
        "Describe what it means to walk in the Spirit.",
        "Practice daily surrender and dependence.",
      ],
      keyConcepts: [
        "Being filled with the Spirit.",
        "Moment-by-moment reliance on Jesus.",
      ],
      scriptureRefs: ["Galatians 5:16-25", "Ephesians 5:18"],
      journalPrompts: [
        "Holy Spirit, where are You inviting me to trust You today?",
        "What does it look like for me to walk in step with You this week?",
      ],
      arcTemplates: {
        admit: [
          {
            title: "Admit your dependence",
            description:
              "Lord, I admit I can’t love, serve, or obey in my own strength.",
          },
        ],
        renounce: [
          {
            title: "Renounce self-effort",
            description:
              "I renounce trying to live today for You instead of from You.",
          },
        ],
        confess: [
          {
            title: "Confess Spirit-filled living",
            description:
              "I confess that You live in me and I choose to walk by Your Spirit.",
          },
        ],
      },
    },
  ];
  
  export function getAllModules(): Module[] {
    return [...MODULES].sort((a, b) => a.order - b.order);
  }
  
  export function getModuleBySlug(slug: string): Module | undefined {
    return MODULES.find((m) => m.slug === slug);
  }
  
  export function getNextModuleSlug(slug: string): string | null {
    const all = getAllModules();
    const idx = all.findIndex((m) => m.slug === slug);
    if (idx === -1 || idx === all.length - 1) return null;
    return all[idx + 1].slug;
  }
  
  export function getPrevModuleSlug(slug: string): string | null {
    const all = getAllModules();
    const idx = all.findIndex((m) => m.slug === slug);
    if (idx <= 0) return null;
    return all[idx - 1].slug;
  }
  
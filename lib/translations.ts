type TranslationValue = string | { [key: string]: TranslationValue };

interface Translations {
  [key: string]: {
    [key: string]: TranslationValue;
  };
}

export const translations: Translations = {
  'en': {
    'metadata': {
      'title': 'TradeBox - AI-Powered Retail Analysis',
      'description': 'AI-powered system for analyzing store shelves and competitor prices',
    },
    'header': {
      'title': 'TradeBox',
      'launchApp': 'Launch App',
      'dashboard': 'Dashboard',
    },
    'hero': {
      'title': 'AI-Powered Retail Intelligence',
      'description': 'Analyze store shelves, track competitor prices, and gain actionable insights with our computer vision technology.',
      'mobileApp': 'Mobile App',
      'webDashboard': 'Web Dashboard',
      'demo': 'Product Demo Visualization',
    },
    'howItWorks': {
      'title': 'How It Works',
      'capture': {
        'title': 'Capture',
        'description': 'Take photos of store shelves with our mobile app',
      },
      'analyze': {
        'title': 'Analyze',
        'description': 'Our AI identifies products and prices automatically',
      },
      'insight': {
        'title': 'Insight',
        'description': 'View trends and receive AI-powered recommendations',
      },
    },
    'footer': {
      'copyright': '© 2025 TradeBox. All rights reserved.',
    },
    'app': {
      'tabs': {
        'camera': 'Camera',
        'uploads': 'Uploads'
      },
      'nav': {
        'home': 'Home',
        'history': 'History',
        'capture': 'Capture',
        'settings': 'Settings'
      },
      'header': {
        'title': 'TradeBox',
        'toggleTheme': 'Toggle theme',
        'profile': 'Profile'
      },
      'cameraView': {
        'preview': 'Camera preview will appear here.',
        'instruction': 'Point camera at store shelf.',
        'guide': 'Guide',
        'zoom': 'Zoom',
        'rotate': 'Rotate'
      },
      'uploads': {
        'title': 'Recent Uploads',
        'uploadButton': 'Upload'
      },
      'recentUploads': {
        'storeLocations': {
          'aisle': 'Aisle',
          'beverages': 'Beverages',
          'checkout': 'Checkout',
          'dairy': 'Dairy'
        },
        'today': 'Today',
        'yesterday': 'Yesterday',
        'daysAgo': '{days} days ago',
        'products': 'Products:',
        'status': 'Complete'
      },
      'upload': {
        'title': 'Upload Photo',
        'back': 'Back',
        'photoPreview': 'Photo Preview',
        'uploadButton': 'Upload Photo',
        'uploadingProgress': 'Uploading... {progress}%',
        'processing': 'Processing image...',
        'uploadComplete': 'Upload Complete',
        'analysisComplete': 'AI analysis complete. View insights on the dashboard.',
        'backToCamera': 'Back to Camera',
        'viewInsights': 'View Insights',
        'quickAnalysis': 'Quick Analysis',
        'productsDetected': 'Products Detected:',
        'priceDifferences': 'Price Differences:',
        'potentialIssues': 'Potential Issues:'
      },
      'history': {
        'title': 'Upload History',
        'search': 'Search',
        'tabs': {
          'all': 'All',
          'today': 'Today',
          'week': 'This Week'
        },
        'storeShelf': '{store} Shelf {number}',
        'locations': {
          'aisle': 'Aisle {number}',
          'beverages': 'Beverages Section',
          'checkout': 'Checkout Area',
          'dairy': 'Dairy Section'
        },
        'actions': {
          'viewAnalysis': 'View Analysis',
          'delete': 'Delete'
        }
      }
    },
    'login': {
      'title': 'TradeBox',
      'subtitle': 'Enter your credentials to access the dashboard',
      'email': 'Email',
      'password': 'Password',
      'forgotPassword': 'Forgot password?',
      'signIn': 'Sign In',
      'orContinueWith': 'Or continue with',
      'demoAccount': 'Demo Account',
      'backToHome': 'Back to home',
      'showPassword': 'Show password',
      'hidePassword': 'Hide password',
    },
    'dashboard': {
      'title': 'Dashboard',
      'description': 'Overview of your retail analytics and insights.',
      'tabs': {
        'overview': 'Overview',
        'products': 'Products',
        'stores': 'Stores',
        'alerts': 'Alerts',
      },
      'nav': {
        'dashboard': 'Dashboard',
        'productInsights': 'Product Insights',
        'trendsAnalysis': 'Trends & Analysis',
        'recommendations': 'Recommendations',
        'settings': 'Settings',
      },
      'insights': {
        'totalScans': 'Total Scans',
        'totalScansChange': '+12% from last month',
        'productsTracked': 'Products Tracked',
        'productsTrackedInfo': 'Across 7 stores',
        'priceAlerts': 'Price Alerts',
        'priceAlertsInfo': '12 high priority',
        'avgPriceDifference': 'Avg. Price Difference',
        'avgPriceDifferenceInfo': 'Lower than competitors',
      },
      'chart': {
        'date': 'Date',
        'yourPrice': 'Your Price',
        'competitorA': 'Competitor A',
        'competitorB': 'Competitor B',
        'months': {
          'jan': 'Jan',
          'feb': 'Feb',
          'mar': 'Mar',
          'apr': 'Apr',
          'may': 'May',
          'jun': 'Jun',
          'jul': 'Jul',
          'aug': 'Aug',
          'sep': 'Sep',
          'oct': 'Oct',
          'nov': 'Nov',
          'dec': 'Dec'
        }
      },
      'recentScans': {
        'viewAll': 'View All',
        'noScans': 'No recent scans',
        'timeAgo': 'ago'
      },
      'insightsPage': {
        'title': 'Product Insights',
        'description': 'Detailed analysis of products, prices, and competitive positioning',
        'productData': {
          'title': 'Product Data',
          'description': 'View and filter product data from all scanned store shelves',
          'filters': {
            'productCategory': 'Product Category',
            'store': 'Store',
            'dateRange': 'Date Range',
            'selectCategory': 'Select category',
            'selectStore': 'Select store',
            'selectRange': 'Select range',
            'allCategories': 'All Categories',
            'beverages': 'Beverages',
            'snacks': 'Snacks',
            'dairy': 'Dairy',
            'frozen': 'Frozen',
            'allStores': 'All Stores',
            'storeOne': 'Store One',
            'storeTwo': 'Store Two',
            'storeThree': 'Store Three',
            'last7Days': 'Last 7 Days',
            'last30Days': 'Last 30 Days',
            'last90Days': 'Last 90 Days',
            'yearToDate': 'Year to Date'
          },
          'buttons': {
            'filter': 'Filter',
            'export': 'Export'
          },
          'table': {
            'product': 'Product',
            'category': 'Category',
            'store': 'Store',
            'yourPrice': 'Your Price',
            'competitorPrice': 'Competitor Price',
            'priceDifference': 'Price Difference',
            'lastUpdated': 'Last Updated'
          }
        },
        'priceTrends': {
          'title': 'Price Trends',
          'description': 'Historical price comparison with competitors',
          'selectProduct': 'Select product',
          'selectStore': 'Select store'
        }
      },
      'recommendations': {
        'title': 'Alerts & Recommendations',
        'description': 'AI-generated insights and actions based on competitor analysis.',
        'tabs': {
          'all': 'All',
          'highPriority': 'High Priority',
          'mediumPriority': 'Medium Priority',
          'lowPriority': 'Low Priority'
        },
        'actions': {
          'markAllAsRead': 'Mark All as Read',
          'snooze': 'Snooze',
          'dismiss': 'Dismiss',
          'takeAction': 'Take Action'
        },
        'priority': {
          'high': 'High',
          'medium': 'Medium',
          'low': 'Low'
        },
        'impact': {
          'high': 'High',
          'medium': 'Medium',
          'low': 'Low'
        },
        'store': 'Store:',
        'items': {
          'item1': {
            'title': 'Price Reduction Opportunity',
            'description': 'Product A is priced 15% higher than competitors. Consider reducing price to match market rate.',
            'store': 'Store One',
            'date': '2 hours ago'
          },
          'item2': {
            'title': 'Potential Revenue Increase',
            'description': 'Product B is priced 10% below competitors. Consider raising price to increase margins.',
            'store': 'Store Two',
            'date': '1 day ago'
          },
          'item3': {
            'title': 'Competitive Threat Detected',
            'description': 'Competitor introduced a new product variant that may impact sales of Product C.',
            'store': 'Store Three',
            'date': '2 days ago'
          },
          'item4': {
            'title': 'Stock Level Alert',
            'description': 'Product D has limited shelf presence compared to competitors. Consider restocking.',
            'store': 'Store One',
            'date': '3 days ago'
          },
          'item5': {
            'title': 'Promotion Opportunity',
            'description': 'Competitor offering bulk discounts on Product E. Consider matching promotion.',
            'store': 'Store Two',
            'date': '4 days ago'
          },
          'item6': {
            'title': 'Product Placement Suggestion',
            'description': 'Products in category F have better visibility in competitor stores. Consider adjusting shelf placement.',
            'store': 'Store Three',
            'date': '1 week ago'
          },
          'item7': {
            'title': 'New Product Introduction',
            'description': 'Competitor introduced Product G in category H. Consider expanding your product line.',
            'store': 'Store One',
            'date': '1 week ago'
          }
        }
      },
      'cards': {
        'priceChanges': {
          'title': 'Price Changes',
          'description': 'Price trends for top products over time',
        },
        'recentScans': {
          'title': 'Recent Scans',
          'description': 'Latest store shelf scans and uploads',
        },
        'highPriorityAlerts': {
          'title': 'High Priority Alerts',
          'description': 'Actionable items requiring attention',
        },
        'productAnalysis': {
          'title': 'Product Analysis',
          'description': 'Detailed view of products and price comparisons',
          'placeholder': 'Product Analysis Dashboard',
        },
        'storeComparison': {
          'title': 'Store Comparison',
          'description': 'Compare products across different store locations',
          'placeholder': 'Store Comparison Dashboard',
        },
        'allAlerts': {
          'title': 'All Alerts',
          'description': 'Price discrepancies and action items',
        },
      },
      'alerts': {
        'priority': {
          'high': 'high',
          'medium': 'medium',
          'low': 'low'
        },
        'takeAction': 'Take Action',
        'alert1': {
            'title': 'Price discrepancy on Product A',
            'store': 'Store One',
            'difference': '+15%',
            'time': '2 hours ago'
          },
        'alert2': {
            'title': 'Lower shelf visibility for Product B',
            'store': 'Store Two',
            'difference': 'Low visibility',
            'time': '3 hours ago'
          },
        'alert3': {
            'title': 'Stock level low for Product C',
            'store': 'Store Three',
            'difference': '2 units only',
            'time': '4 hours ago'
          },
        'alert4': {
            'title': 'New competitor product detected',
            'store': 'Store One',
            'difference': 'New product',
            'time': '1 day ago'
          },
        'alert5': {
            'title': 'Promotion detected on Product D',
            'store': 'Store Two',
            'difference': '20% off',
            'time': '1 day ago'
          },
        'alert6': {
            'title': 'Price advantage on Product E',
            'store': 'Store Three',
            'difference': '-8%',
            'time': '2 days ago'
          },
        'alert7': {
            'title': 'Shelf positioning changed',
            'store': 'Store One',
            'difference': 'Moved to top',
            'time': '2 days ago'
          }
      },
    },
  },
  'pt-BR': {
    'metadata': {
      'title': 'TradeBox - Análise de Varejo com IA',
      'description': 'Sistema com inteligência artificial para análise de prateleiras e preços de concorrentes',
    },
    'header': {
      'title': 'TradeBox',
      'launchApp': 'Iniciar Aplicativo',
      'dashboard': 'Painel de Controle',
    },
    'hero': {
      'title': 'Inteligência de Varejo com IA',
      'description': 'Analise prateleiras de lojas, acompanhe preços de concorrentes e obtenha insights acionáveis com nossa tecnologia de visão computacional.',
      'mobileApp': 'Aplicativo Móvel',
      'webDashboard': 'Painel Web',
      'demo': 'Visualização da Demo do Produto',
    },
    'howItWorks': {
      'title': 'Como Funciona',
      'capture': {
        'title': 'Captura',
        'description': 'Tire fotos das prateleiras de lojas com nosso aplicativo móvel',
      },
      'analyze': {
        'title': 'Análise',
        'description': 'Nossa IA identifica produtos e preços automaticamente',
      },
      'insight': {
        'title': 'Insights',
        'description': 'Visualize tendências e receba recomendações baseadas em IA',
      },
    },
    'footer': {
      'copyright': ' 2025 TradeBox. Todos os direitos reservados.',
    },
    'app': {
      'tabs': {
        'camera': 'Câmera',
        'uploads': 'Uploads'
      },
      'nav': {
        'home': 'Início',
        'history': 'Histórico',
        'capture': 'Capturar',
        'settings': 'Configurações'
      },
      'header': {
        'title': 'TradeBox',
        'toggleTheme': 'Alternar tema',
        'profile': 'Perfil'
      },
      'cameraView': {
        'preview': 'A pré-visualização da câmera aparecerá aqui.',
        'instruction': 'Aponte a câmera para a prateleira da loja.',
        'guide': 'Guia',
        'zoom': 'Zoom',
        'rotate': 'Girar'
      },
      'uploads': {
        'title': 'Uploads Recentes',
        'uploadButton': 'Upload'
      },
      'recentUploads': {
        'storeLocations': {
          'aisle': 'Corredor',
          'beverages': 'Bebidas',
          'checkout': 'Checkout',
          'dairy': 'Laticínios'
        },
        'today': 'Hoje',
        'yesterday': 'Ontem',
        'daysAgo': '{days} dias atrás',
        'products': 'Produtos:',
        'status': 'Completo'
      },
      'upload': {
        'title': 'Enviar Foto',
        'back': 'Voltar',
        'photoPreview': 'Pré-visualização da Foto',
        'uploadButton': 'Enviar Foto',
        'uploadingProgress': 'Enviando... {progress}%',
        'processing': 'Processando imagem...',
        'uploadComplete': 'Envio Completo',
        'analysisComplete': 'Análise de IA completa. Veja os insights no painel de controle.',
        'backToCamera': 'Voltar para Câmera',
        'viewInsights': 'Ver Insights',
        'quickAnalysis': 'Análise Rápida',
        'productsDetected': 'Produtos Detectados:',
        'priceDifferences': 'Diferenças de Preço:',
        'potentialIssues': 'Problemas Potenciais:'
      },
      'history': {
        'title': 'Histórico de Uploads',
        'search': 'Buscar',
        'tabs': {
          'all': 'Todos',
          'today': 'Hoje',
          'week': 'Esta Semana'
        },
        'storeShelf': 'Prateleira {number} da {store}',
        'locations': {
          'aisle': 'Corredor {number}',
          'beverages': 'Seção de Bebidas',
          'checkout': 'Área de Checkout',
          'dairy': 'Seção de Laticínios'
        },
        'actions': {
          'viewAnalysis': 'Ver Análise',
          'delete': 'Excluir'
        }
      }
    },
    'login': {
      'title': 'TradeBox',
      'subtitle': 'Digite suas credenciais para acessar o painel',
      'email': 'Email',
      'password': 'Senha',
      'forgotPassword': 'Esqueceu a senha?',
      'signIn': 'Entrar',
      'orContinueWith': 'Ou continue com',
      'demoAccount': 'Conta de Demonstração',
      'backToHome': 'Voltar para a página inicial',
      'showPassword': 'Mostrar senha',
      'hidePassword': 'Ocultar senha',
    },
    'dashboard': {
      'title': 'Painel de Controle',
      'description': 'Visão geral das suas análises e insights de varejo.',
      'tabs': {
        'overview': 'Visão Geral',
        'products': 'Produtos',
        'stores': 'Lojas',
        'alerts': 'Alertas',
      },
      'nav': {
        'dashboard': 'Painel de Controle',
        'productInsights': 'Insights de Produtos',
        'trendsAnalysis': 'Tendências & Análises',
        'recommendations': 'Recomendações',
        'settings': 'Configurações',
      },
      'insights': {
        'totalScans': 'Total de Digitalizações',
        'totalScansChange': '+12% em relação ao mês passado',
        'productsTracked': 'Produtos Monitorados',
        'productsTrackedInfo': 'Em 7 lojas',
        'priceAlerts': 'Alertas de Preço',
        'priceAlertsInfo': '12 de alta prioridade',
        'avgPriceDifference': 'Diferença Média de Preço',
        'avgPriceDifferenceInfo': 'Menor que concorrentes',
      },
      'chart': {
        'date': 'Data',
        'yourPrice': 'Seu Preço',
        'competitorA': 'Concorrente A',
        'competitorB': 'Concorrente B',
        'months': {
          'jan': 'Jan',
          'feb': 'Fev',
          'mar': 'Mar',
          'apr': 'Abr',
          'may': 'Mai',
          'jun': 'Jun',
          'jul': 'Jul',
          'aug': 'Ago',
          'sep': 'Set',
          'oct': 'Out',
          'nov': 'Nov',
          'dec': 'Dez'
        }
      },
      'recentScans': {
        'viewAll': 'Ver Todos',
        'noScans': 'Sem digitalizações recentes',
        'timeAgo': 'atrás'
      },
      'insightsPage': {
        'title': 'Insights de Produtos',
        'description': 'Análise detalhada de produtos, preços e posicionamento competitivo',
        'productData': {
          'title': 'Dados do Produto',
          'description': 'Visualize e filtre dados de produtos de todas as prateleiras digitalizadas',
          'filters': {
            'productCategory': 'Categoria do Produto',
            'store': 'Loja',
            'dateRange': 'Período',
            'selectCategory': 'Selecione a categoria',
            'selectStore': 'Selecione a loja',
            'selectRange': 'Selecione o período',
            'allCategories': 'Todas as Categorias',
            'beverages': 'Bebidas',
            'snacks': 'Lanches',
            'dairy': 'Laticínios',
            'frozen': 'Congelados',
            'allStores': 'Todas as Lojas',
            'storeOne': 'Loja Um',
            'storeTwo': 'Loja Dois',
            'storeThree': 'Loja Três',
            'last7Days': 'Últimos 7 Dias',
            'last30Days': 'Últimos 30 Dias',
            'last90Days': 'Últimos 90 Dias',
            'yearToDate': 'Desde o Início do Ano'
          },
          'buttons': {
            'filter': 'Filtrar',
            'export': 'Exportar'
          },
          'table': {
            'product': 'Produto',
            'category': 'Categoria',
            'store': 'Loja',
            'yourPrice': 'Seu Preço',
            'competitorPrice': 'Preço do Concorrente',
            'priceDifference': 'Diferença de Preço',
            'lastUpdated': 'Última Atualização'
          }
        },
        'priceTrends': {
          'title': 'Tendências de Preço',
          'description': 'Comparação histórica de preços com concorrentes',
          'selectProduct': 'Selecione o produto',
          'selectStore': 'Selecione a loja'
        }
      },
      'recommendations': {
        'title': 'Alertas & Recomendações',
        'description': 'Insights e ações gerados por IA com base na análise de concorrentes.',
        'tabs': {
          'all': 'Todos',
          'highPriority': 'Alta Prioridade',
          'mediumPriority': 'Média Prioridade',
          'lowPriority': 'Baixa Prioridade'
        },
        'actions': {
          'markAllAsRead': 'Marcar Todos como Lidos',
          'snooze': 'Adiar',
          'dismiss': 'Dispensar',
          'takeAction': 'Tomar Ação'
        },
        'priority': {
          'high': 'Alta',
          'medium': 'Média',
          'low': 'Baixa'
        },
        'impact': {
          'high': 'Alto',
          'medium': 'Médio',
          'low': 'Baixo'
        },
        'store': 'Loja:',
        'items': {
          'item1': {
            'title': 'Oportunidade de Redução de Preço',
            'description': 'O Produto A está 15% mais caro que os concorrentes. Considere reduzir o preço para igualar a taxa de mercado.',
            'store': 'Loja Um',
            'date': '2 horas atrás'
          },
          'item2': {
            'title': 'Aumento Potencial de Receita',
            'description': 'O Produto B está 10% abaixo dos concorrentes. Considere aumentar o preço para aumentar as margens.',
            'store': 'Loja Dois',
            'date': '1 dia atrás'
          },
          'item3': {
            'title': 'Ameaça Competitiva Detectada',
            'description': 'Concorrente introduziu uma nova variante de produto que pode impactar as vendas do Produto C.',
            'store': 'Loja Três',
            'date': '2 dias atrás'
          },
          'item4': {
            'title': 'Alerta de Nível de Estoque',
            'description': 'O Produto D tem presença limitada nas prateleiras em comparação com os concorrentes. Considere reabastecer.',
            'store': 'Loja Um',
            'date': '3 dias atrás'
          },
          'item5': {
            'title': 'Oportunidade de Promoção',
            'description': 'Concorrente oferecendo descontos por volume no Produto E. Considere igualar a promoção.',
            'store': 'Loja Dois',
            'date': '4 dias atrás'
          },
          'item6': {
            'title': 'Sugestão de Posicionamento de Produto',
            'description': 'Produtos na categoria F têm melhor visibilidade nas lojas concorrentes. Considere ajustar o posicionamento nas prateleiras.',
            'store': 'Loja Três',
            'date': '1 semana atrás'
          },
          'item7': {
            'title': 'Introdução de Novo Produto',
            'description': 'Concorrente introduziu o Produto G na categoria H. Considere expandir sua linha de produtos.',
            'store': 'Loja Um',
            'date': '1 semana atrás'
          }
        }
      },
      'cards': {
        'priceChanges': {
          'title': 'Mudanças de Preço',
          'description': 'Tendências de preço para os principais produtos ao longo do tempo',
        },
        'recentScans': {
          'title': 'Digitalizações Recentes',
          'description': 'Últimas digitalizações e uploads de prateleiras de lojas',
        },
        'highPriorityAlerts': {
          'title': 'Alertas de Alta Prioridade',
          'description': 'Itens acionáveis que requerem atenção',
        },
        'productAnalysis': {
          'title': 'Análise de Produtos',
          'description': 'Visão detalhada de produtos e comparações de preços',
          'placeholder': 'Painel de Análise de Produtos',
        },
        'storeComparison': {
          'title': 'Comparação de Lojas',
          'description': 'Compare produtos em diferentes localizações de lojas',
          'placeholder': 'Painel de Comparação de Lojas',
        },
        'allAlerts': {
          'title': 'Todos os Alertas',
          'description': 'Discrepâncias de preço e itens de ação',
        },
      },
      'alerts': {
        'priority': {
          'high': 'alta',
          'medium': 'média',
          'low': 'baixa'
        },
        'takeAction': 'Tomar Ação',
        'alert1': {
            'title': 'Discrepância de preço no Produto A',
            'store': 'Loja Um',
            'difference': '+15%',
            'time': '2 horas atrás'
          },
        'alert2': {
            'title': 'Baixa visibilidade na prateleira para o Produto B',
            'store': 'Loja Dois',
            'difference': 'Baixa visibilidade',
            'time': '3 horas atrás'
          },
        'alert3': {
            'title': 'Nível de estoque baixo para o Produto C',
            'store': 'Loja Três',
            'difference': 'Apenas 2 unidades',
            'time': '4 horas atrás'
          },
        'alert4': {
            'title': 'Novo produto concorrente detectado',
            'store': 'Loja Um',
            'difference': 'Novo produto',
            'time': '1 dia atrás'
          },
        'alert5': {
            'title': 'Promoção detectada no Produto D',
            'store': 'Loja Dois',
            'difference': '20% de desconto',
            'time': '1 dia atrás'
          },
        'alert6': {
            'title': 'Vantagem de preço no Produto E',
            'store': 'Loja Três',
            'difference': '-8%',
            'time': '2 dias atrás'
          },
        'alert7': {
            'title': 'Posicionamento na prateleira alterado',
            'store': 'Loja Um',
            'difference': 'Movido para o topo',
            'time': '2 dias atrás'
          }
      },
    },
  },
};

export function getTranslation(locale: string, key: string): string {
  // Verificar se o locale existe nas traduções
  if (!translations[locale]) {
    console.warn(`Locale '${locale}' not found, falling back to 'en'`);
    locale = 'en';
  }

  const keys = key.split('.');
  let result: any = translations[locale];
  
  // Navegar pela estrutura de traduções
  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      // Se a chave não for encontrada no idioma atual
      if (locale !== 'en') {
        // Tentar encontrar em inglês
        return getTranslationSafe('en', key);
      } else {
        // Se já estamos em inglês e não encontramos, retornar a chave
        return key;
      }
    }
  }
  
  return typeof result === 'string' ? result : key;
}

// Versão segura da função getTranslation para evitar recursão infinita
function getTranslationSafe(locale: string, key: string): string {
  const keys = key.split('.');
  let result: any = translations[locale];
  
  for (const k of keys) {
    if (result && result[k] !== undefined) {
      result = result[k];
    } else {
      // Se não encontrarmos a tradução em inglês, retornar a chave
      return key;
    }
  }
  
  return typeof result === 'string' ? result : key;
}

const DICTIONARY = [
    // 2-Letter Words
    "AA", "AB", "AD", "AE", "AG", "AH", "AI", "AL", "AM", "AN", "AR", "AS", "AT", "AW", "AX", "AY",
    "BA", "BE", "BI", "BO", "BY", "DE", "DO", "ED", "EF", "EH", "EL", "EM", "EN", "ER", "ES", "ET",
    "EX", "FA", "FE", "GI", "GO", "HA", "HE", "HI", "HM", "HO", "ID", "IF", "IN", "IS", "IT", "JO",
    "KA", "KI", "LA", "LI", "LO", "MA", "ME", "MI", "MM", "MO", "MU", "MY", "NA", "NE", "NO", "NU",
    "OD", "OE", "OF", "OH", "OI", "OM", "ON", "OP", "OR", "OS", "OW", "OX", "OY", "PA", "PE", "PI",
    "QI", "RE", "SH", "SI", "SO", "TA", "TI", "TO", "UH", "UM", "UN", "UP", "US", "UT", "WE", "WO",
    "XI", "XU", "YA", "YE", "YO", "ZA",

    // Common & High-Scoring Short Words
    "AAH", "AAL", "AAS", "ABA", "ABB", "ABS", "ABY", "ACE", "ACH", "ACT", "ADD", "ADO", "ADS", "ADZ",
    "AFF", "AFT", "AGA", "AGE", "AGO", "AGS", "AHA", "AHI", "AHS", "AID", "AIL", "AIM", "AIR", "AIS",
    "AIT", "AJU", "AKE", "ALA", "ALB", "ALE", "ALL", "ALP", "ALS", "ALT", "AMA", "AMI", "AMP", "AMU",
    "ANA", "AND", "ANE", "ANI", "ANT", "ANY", "APE", "APU", "ARC", "ARE", "ARF", "ARK", "ARM", "ARS",
    "ART", "ASH", "ASK", "ASP", "ASS", "ATE", "ATT", "AUK", "AVA", "AVE", "AVO", "AWA", "AWE", "AWL",
    "AXE", "AYE", "AYS", "AZO", "BAA", "BAC", "BAD", "BAG", "BAH", "BAL", "BAM", "BAN", "BAP", "BAR",
    "BAS", "BAT", "BAY", "BED", "BEE", "BEG", "BEL", "BEN", "BES", "BET", "BEY", "BIB", "BID", "BIG",
    "BIN", "BIO", "BIS", "BIT", "BIZ", "BOB", "BOD", "BOG", "BOI", "BOK", "BON", "BOO", "BOP", "BOT",
    "BOW", "BOX", "BOY", "BRA", "BRO", "BRU", "BUB", "BUD", "BUG", "BUM", "BUN", "BUR", "BUS", "BUT",
    "BUY", "BYE", "BYS", "CAB", "CAD", "CAM", "CAN", "CAP", "CAR", "CAT", "CAW", "CAY", "CEE", "CEL",
    "CEP", "CHI", "CID", "CIG", "CIS", "CLD", "CLY", "COB", "COD", "COG", "COL", "CON", "COO", "COP",
    "COR", "COS", "COT", "COW", "COX", "COY", "COZ", "CRU", "CRY", "CUB", "CUD", "CUE", "CUM", "CUP",
    "CUR", "CUT", "CUZ", "DAB", "DAD", "DAG", "DAH", "DAK", "DAL", "DAM", "DAN", "DAP", "DAW", "DAY",
    "DEB", "DEF", "DEL", "DEN", "DEV", "DEW", "DEX", "DEY", "DIB", "DID", "DIE", "DIF", "DIG", "DIM",
    "DIN", "DIP", "DIS", "DIT", "DOC", "DOE", "DOG", "DOL", "DOM", "DON", "DOR", "DOS", "DOT", "DOW",
    "DRY", "DUB", "DUD", "DUE", "DUG", "DUH", "DUI", "DUN", "DUO", "DUP", "DYE", "DYS", "EAR", "EAS",
    "EAT", "EAU", "EBB", "ECH", "ECO", "ECT", "EDH", "EDS", "EEK", "EEL", "EFS", "EFT", "EGG", "EGO",
    "EHS", "EKE", "ELD", "ELF", "ELK", "ELL", "ELM", "ELS", "EME", "EMU", "END", "ENE", "ENG", "ENS",
    "EON", "ERA", "ERE", "ERG", "ERN", "ERR", "ERS", "ESS", "EST", "ETA", "ETH", "EVE", "EWE", "EYE",

    // Common Everyday, Financial, and Word-Game Lexicon Words (incl. LOAN, HOUSE, WATER, etc.)
    "LOAN", "LOANS", "LOANER", "LOANERS", "HOUSE", "HOUSES", "HOUSING", "WATER", "WATERS", "WATERY",
    "SILENT", "LISTEN", "ENLIST", "INLETS", "TINSEL", "CREATE", "REACTS", "TRACES", "CATER", "CRATE", 
    "REACT", "TRACE", "PLANET", "PLATE", "PLANT", "PLEAT", "PANEL", "PLANE", "LEANT", "PUZZLE", 
    "ANAGRAM", "RATES", "TARES", "STARE", "TEARS", "ASTER", "TALES", "TEALS", "STALE", "STEAL", 
    "LEAST", "SLATE", "TALER", "ALTER", "LATER", "ALERT", "ALERTS", "ALTERS", "SALTER", "LATEST", 
    "LEASTS", "SLATES", "STALES", "STEALS", "APPLE", "PEAPS", "PEAP", "PEA", "APE", "APP", "ALE", 
    "PAL", "LAP", "PLEA", "LEAP", "PALM", "LAMP", "MAPS", "SAMP", "AMPS", "LAPS", "PALS", "ALPS", 
    "SALP", "SLAP", "PLUM", "LUMP", "PUMS", "LUMS", "WORLD", "WORLDS", "POWER", "POWERS", "MONEY",
    "GREEN", "WORDS", "GAME", "GAMES", "PLAY", "PLAYS", "SCORE", "SCORES", "BOARD", "BOARDS"
];


 enum UserStatus {
    online,
    offline,
    idle,
    doNotDisturb,
  }
  
   enum Character {
    WARRIOR,
    MAGE ,
    ARCHER,
    ROGUE,
  }
  
   enum RankDivision {
    BRONZE ,
    SILVER ,
    GOLD ,
    PLATINUM ,
  }
  
   enum RankTier {
    TIER1 ,
    TIER2 ,
    TIER3 ,
  }
  

export type UserProfile = {
    userId: number;
    username: string;
    fname: string;
    lname: string;
    bio?: string | null;
    banner?: string | null;
    avatar: string;
    status: string;
    walletBalance: number;
    playerStats?: any; // Json type maps to any
    playerCharacters?: any;
    playerSelectedCharacter?: string | null;
    preferences?: any;
    matchHistory?: any;
    isVerified: boolean;
    rankDivision: string;
    rankTier: string;
    totalGames: number;
    wins: number;
    losses: number;
    rank: number;
    level: number;
    createdAt: Date;
    updatedAt: Date;
  };
  

/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model MatchSpectator
 * 
 */
export type MatchSpectator = $Result.DefaultSelection<Prisma.$MatchSpectatorPayload>
/**
 * Model MatchPlayer
 * 
 */
export type MatchPlayer = $Result.DefaultSelection<Prisma.$MatchPlayerPayload>
/**
 * Model Match
 * 
 */
export type Match = $Result.DefaultSelection<Prisma.$MatchPayload>
/**
 * Model MatchSetting
 * 
 */
export type MatchSetting = $Result.DefaultSelection<Prisma.$MatchSettingPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Invitation
 * 
 */
export type Invitation = $Result.DefaultSelection<Prisma.$InvitationPayload>
/**
 * Model Bet
 * 
 */
export type Bet = $Result.DefaultSelection<Prisma.$BetPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const GameStatus: {
  WAITING: 'WAITING',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type GameStatus = (typeof GameStatus)[keyof typeof GameStatus]


export const GameMode: {
  ONE_VS_ONE: 'ONE_VS_ONE',
  ONE_VS_AI: 'ONE_VS_AI',
  TOURNAMENT: 'TOURNAMENT',
  BOUNCE_CHALLENGE: 'BOUNCE_CHALLENGE'
};

export type GameMode = (typeof GameMode)[keyof typeof GameMode]


export const AIDifficulty: {
  EASY: 'EASY',
  MEDIUM: 'MEDIUM',
  HARD: 'HARD',
  INSANE: 'INSANE'
};

export type AIDifficulty = (typeof AIDifficulty)[keyof typeof AIDifficulty]


export const BetStatus: {
  PENDING: 'PENDING',
  WON: 'WON',
  LOST: 'LOST',
  CANCELLED: 'CANCELLED'
};

export type BetStatus = (typeof BetStatus)[keyof typeof BetStatus]


export const InvitationStatus: {
  PENDING: 'PENDING',
  ACCEPTED: 'ACCEPTED',
  DECLINED: 'DECLINED',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED'
};

export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus]


export const InvitationType: {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE'
};

export type InvitationType = (typeof InvitationType)[keyof typeof InvitationType]

}

export type GameStatus = $Enums.GameStatus

export const GameStatus: typeof $Enums.GameStatus

export type GameMode = $Enums.GameMode

export const GameMode: typeof $Enums.GameMode

export type AIDifficulty = $Enums.AIDifficulty

export const AIDifficulty: typeof $Enums.AIDifficulty

export type BetStatus = $Enums.BetStatus

export const BetStatus: typeof $Enums.BetStatus

export type InvitationStatus = $Enums.InvitationStatus

export const InvitationStatus: typeof $Enums.InvitationStatus

export type InvitationType = $Enums.InvitationType

export const InvitationType: typeof $Enums.InvitationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MatchSpectators
 * const matchSpectators = await prisma.matchSpectator.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MatchSpectators
   * const matchSpectators = await prisma.matchSpectator.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.matchSpectator`: Exposes CRUD operations for the **MatchSpectator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchSpectators
    * const matchSpectators = await prisma.matchSpectator.findMany()
    * ```
    */
  get matchSpectator(): Prisma.MatchSpectatorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchPlayer`: Exposes CRUD operations for the **MatchPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchPlayers
    * const matchPlayers = await prisma.matchPlayer.findMany()
    * ```
    */
  get matchPlayer(): Prisma.MatchPlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.match`: Exposes CRUD operations for the **Match** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matches
    * const matches = await prisma.match.findMany()
    * ```
    */
  get match(): Prisma.MatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.matchSetting`: Exposes CRUD operations for the **MatchSetting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MatchSettings
    * const matchSettings = await prisma.matchSetting.findMany()
    * ```
    */
  get matchSetting(): Prisma.MatchSettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invitation`: Exposes CRUD operations for the **Invitation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invitations
    * const invitations = await prisma.invitation.findMany()
    * ```
    */
  get invitation(): Prisma.InvitationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bet`: Exposes CRUD operations for the **Bet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bets
    * const bets = await prisma.bet.findMany()
    * ```
    */
  get bet(): Prisma.BetDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    MatchSpectator: 'MatchSpectator',
    MatchPlayer: 'MatchPlayer',
    Match: 'Match',
    MatchSetting: 'MatchSetting',
    User: 'User',
    Invitation: 'Invitation',
    Bet: 'Bet'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "matchSpectator" | "matchPlayer" | "match" | "matchSetting" | "user" | "invitation" | "bet"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      MatchSpectator: {
        payload: Prisma.$MatchSpectatorPayload<ExtArgs>
        fields: Prisma.MatchSpectatorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchSpectatorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSpectatorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchSpectatorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSpectatorPayload>
          }
          findFirst: {
            args: Prisma.MatchSpectatorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSpectatorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchSpectatorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSpectatorPayload>
          }
          findMany: {
            args: Prisma.MatchSpectatorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSpectatorPayload>[]
          }
          create: {
            args: Prisma.MatchSpectatorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSpectatorPayload>
          }
          createMany: {
            args: Prisma.MatchSpectatorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchSpectatorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSpectatorPayload>[]
          }
          delete: {
            args: Prisma.MatchSpectatorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSpectatorPayload>
          }
          update: {
            args: Prisma.MatchSpectatorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSpectatorPayload>
          }
          deleteMany: {
            args: Prisma.MatchSpectatorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchSpectatorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchSpectatorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSpectatorPayload>[]
          }
          upsert: {
            args: Prisma.MatchSpectatorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSpectatorPayload>
          }
          aggregate: {
            args: Prisma.MatchSpectatorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchSpectator>
          }
          groupBy: {
            args: Prisma.MatchSpectatorGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchSpectatorGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchSpectatorCountArgs<ExtArgs>
            result: $Utils.Optional<MatchSpectatorCountAggregateOutputType> | number
          }
        }
      }
      MatchPlayer: {
        payload: Prisma.$MatchPlayerPayload<ExtArgs>
        fields: Prisma.MatchPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          findFirst: {
            args: Prisma.MatchPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          findMany: {
            args: Prisma.MatchPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>[]
          }
          create: {
            args: Prisma.MatchPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          createMany: {
            args: Prisma.MatchPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>[]
          }
          delete: {
            args: Prisma.MatchPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          update: {
            args: Prisma.MatchPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          deleteMany: {
            args: Prisma.MatchPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>[]
          }
          upsert: {
            args: Prisma.MatchPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPlayerPayload>
          }
          aggregate: {
            args: Prisma.MatchPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchPlayer>
          }
          groupBy: {
            args: Prisma.MatchPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<MatchPlayerCountAggregateOutputType> | number
          }
        }
      }
      Match: {
        payload: Prisma.$MatchPayload<ExtArgs>
        fields: Prisma.MatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findFirst: {
            args: Prisma.MatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          findMany: {
            args: Prisma.MatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          create: {
            args: Prisma.MatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          createMany: {
            args: Prisma.MatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          delete: {
            args: Prisma.MatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          update: {
            args: Prisma.MatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          deleteMany: {
            args: Prisma.MatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>[]
          }
          upsert: {
            args: Prisma.MatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchPayload>
          }
          aggregate: {
            args: Prisma.MatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatch>
          }
          groupBy: {
            args: Prisma.MatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchCountArgs<ExtArgs>
            result: $Utils.Optional<MatchCountAggregateOutputType> | number
          }
        }
      }
      MatchSetting: {
        payload: Prisma.$MatchSettingPayload<ExtArgs>
        fields: Prisma.MatchSettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MatchSettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MatchSettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSettingPayload>
          }
          findFirst: {
            args: Prisma.MatchSettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MatchSettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSettingPayload>
          }
          findMany: {
            args: Prisma.MatchSettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSettingPayload>[]
          }
          create: {
            args: Prisma.MatchSettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSettingPayload>
          }
          createMany: {
            args: Prisma.MatchSettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MatchSettingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSettingPayload>[]
          }
          delete: {
            args: Prisma.MatchSettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSettingPayload>
          }
          update: {
            args: Prisma.MatchSettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSettingPayload>
          }
          deleteMany: {
            args: Prisma.MatchSettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MatchSettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MatchSettingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSettingPayload>[]
          }
          upsert: {
            args: Prisma.MatchSettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MatchSettingPayload>
          }
          aggregate: {
            args: Prisma.MatchSettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMatchSetting>
          }
          groupBy: {
            args: Prisma.MatchSettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MatchSettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MatchSettingCountArgs<ExtArgs>
            result: $Utils.Optional<MatchSettingCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Invitation: {
        payload: Prisma.$InvitationPayload<ExtArgs>
        fields: Prisma.InvitationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InvitationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InvitationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findFirst: {
            args: Prisma.InvitationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InvitationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          findMany: {
            args: Prisma.InvitationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          create: {
            args: Prisma.InvitationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          createMany: {
            args: Prisma.InvitationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InvitationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          delete: {
            args: Prisma.InvitationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          update: {
            args: Prisma.InvitationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          deleteMany: {
            args: Prisma.InvitationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InvitationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InvitationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>[]
          }
          upsert: {
            args: Prisma.InvitationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitationPayload>
          }
          aggregate: {
            args: Prisma.InvitationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvitation>
          }
          groupBy: {
            args: Prisma.InvitationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InvitationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InvitationCountArgs<ExtArgs>
            result: $Utils.Optional<InvitationCountAggregateOutputType> | number
          }
        }
      }
      Bet: {
        payload: Prisma.$BetPayload<ExtArgs>
        fields: Prisma.BetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findFirst: {
            args: Prisma.BetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findMany: {
            args: Prisma.BetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          create: {
            args: Prisma.BetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          createMany: {
            args: Prisma.BetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          delete: {
            args: Prisma.BetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          update: {
            args: Prisma.BetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          deleteMany: {
            args: Prisma.BetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          upsert: {
            args: Prisma.BetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          aggregate: {
            args: Prisma.BetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBet>
          }
          groupBy: {
            args: Prisma.BetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetCountArgs<ExtArgs>
            result: $Utils.Optional<BetCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    matchSpectator?: MatchSpectatorOmit
    matchPlayer?: MatchPlayerOmit
    match?: MatchOmit
    matchSetting?: MatchSettingOmit
    user?: UserOmit
    invitation?: InvitationOmit
    bet?: BetOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MatchCountOutputType
   */

  export type MatchCountOutputType = {
    spectators: number
    bets: number
  }

  export type MatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    spectators?: boolean | MatchCountOutputTypeCountSpectatorsArgs
    bets?: boolean | MatchCountOutputTypeCountBetsArgs
  }

  // Custom InputTypes
  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchCountOutputType
     */
    select?: MatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountSpectatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchSpectatorWhereInput
  }

  /**
   * MatchCountOutputType without action
   */
  export type MatchCountOutputTypeCountBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    matchPlayers: number
    matchSpectators: number
    bets: number
    invitationsSent: number
    invitationsReceived: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchPlayers?: boolean | UserCountOutputTypeCountMatchPlayersArgs
    matchSpectators?: boolean | UserCountOutputTypeCountMatchSpectatorsArgs
    bets?: boolean | UserCountOutputTypeCountBetsArgs
    invitationsSent?: boolean | UserCountOutputTypeCountInvitationsSentArgs
    invitationsReceived?: boolean | UserCountOutputTypeCountInvitationsReceivedArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchPlayerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMatchSpectatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchSpectatorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvitationsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model MatchSpectator
   */

  export type AggregateMatchSpectator = {
    _count: MatchSpectatorCountAggregateOutputType | null
    _min: MatchSpectatorMinAggregateOutputType | null
    _max: MatchSpectatorMaxAggregateOutputType | null
  }

  export type MatchSpectatorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    matchId: string | null
  }

  export type MatchSpectatorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    matchId: string | null
  }

  export type MatchSpectatorCountAggregateOutputType = {
    id: number
    userId: number
    username: number
    matchId: number
    _all: number
  }


  export type MatchSpectatorMinAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    matchId?: true
  }

  export type MatchSpectatorMaxAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    matchId?: true
  }

  export type MatchSpectatorCountAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    matchId?: true
    _all?: true
  }

  export type MatchSpectatorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchSpectator to aggregate.
     */
    where?: MatchSpectatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSpectators to fetch.
     */
    orderBy?: MatchSpectatorOrderByWithRelationInput | MatchSpectatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchSpectatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSpectators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSpectators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchSpectators
    **/
    _count?: true | MatchSpectatorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchSpectatorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchSpectatorMaxAggregateInputType
  }

  export type GetMatchSpectatorAggregateType<T extends MatchSpectatorAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchSpectator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchSpectator[P]>
      : GetScalarType<T[P], AggregateMatchSpectator[P]>
  }




  export type MatchSpectatorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchSpectatorWhereInput
    orderBy?: MatchSpectatorOrderByWithAggregationInput | MatchSpectatorOrderByWithAggregationInput[]
    by: MatchSpectatorScalarFieldEnum[] | MatchSpectatorScalarFieldEnum
    having?: MatchSpectatorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchSpectatorCountAggregateInputType | true
    _min?: MatchSpectatorMinAggregateInputType
    _max?: MatchSpectatorMaxAggregateInputType
  }

  export type MatchSpectatorGroupByOutputType = {
    id: string
    userId: string
    username: string
    matchId: string
    _count: MatchSpectatorCountAggregateOutputType | null
    _min: MatchSpectatorMinAggregateOutputType | null
    _max: MatchSpectatorMaxAggregateOutputType | null
  }

  type GetMatchSpectatorGroupByPayload<T extends MatchSpectatorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchSpectatorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchSpectatorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchSpectatorGroupByOutputType[P]>
            : GetScalarType<T[P], MatchSpectatorGroupByOutputType[P]>
        }
      >
    >


  export type MatchSpectatorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    matchId?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchSpectator"]>

  export type MatchSpectatorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    matchId?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchSpectator"]>

  export type MatchSpectatorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    matchId?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchSpectator"]>

  export type MatchSpectatorSelectScalar = {
    id?: boolean
    userId?: boolean
    username?: boolean
    matchId?: boolean
  }

  export type MatchSpectatorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "username" | "matchId", ExtArgs["result"]["matchSpectator"]>
  export type MatchSpectatorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchSpectatorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MatchSpectatorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MatchSpectatorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchSpectator"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      username: string
      matchId: string
    }, ExtArgs["result"]["matchSpectator"]>
    composites: {}
  }

  type MatchSpectatorGetPayload<S extends boolean | null | undefined | MatchSpectatorDefaultArgs> = $Result.GetResult<Prisma.$MatchSpectatorPayload, S>

  type MatchSpectatorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchSpectatorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchSpectatorCountAggregateInputType | true
    }

  export interface MatchSpectatorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchSpectator'], meta: { name: 'MatchSpectator' } }
    /**
     * Find zero or one MatchSpectator that matches the filter.
     * @param {MatchSpectatorFindUniqueArgs} args - Arguments to find a MatchSpectator
     * @example
     * // Get one MatchSpectator
     * const matchSpectator = await prisma.matchSpectator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchSpectatorFindUniqueArgs>(args: SelectSubset<T, MatchSpectatorFindUniqueArgs<ExtArgs>>): Prisma__MatchSpectatorClient<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchSpectator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchSpectatorFindUniqueOrThrowArgs} args - Arguments to find a MatchSpectator
     * @example
     * // Get one MatchSpectator
     * const matchSpectator = await prisma.matchSpectator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchSpectatorFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchSpectatorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchSpectatorClient<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchSpectator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSpectatorFindFirstArgs} args - Arguments to find a MatchSpectator
     * @example
     * // Get one MatchSpectator
     * const matchSpectator = await prisma.matchSpectator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchSpectatorFindFirstArgs>(args?: SelectSubset<T, MatchSpectatorFindFirstArgs<ExtArgs>>): Prisma__MatchSpectatorClient<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchSpectator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSpectatorFindFirstOrThrowArgs} args - Arguments to find a MatchSpectator
     * @example
     * // Get one MatchSpectator
     * const matchSpectator = await prisma.matchSpectator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchSpectatorFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchSpectatorFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchSpectatorClient<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchSpectators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSpectatorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchSpectators
     * const matchSpectators = await prisma.matchSpectator.findMany()
     * 
     * // Get first 10 MatchSpectators
     * const matchSpectators = await prisma.matchSpectator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchSpectatorWithIdOnly = await prisma.matchSpectator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchSpectatorFindManyArgs>(args?: SelectSubset<T, MatchSpectatorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchSpectator.
     * @param {MatchSpectatorCreateArgs} args - Arguments to create a MatchSpectator.
     * @example
     * // Create one MatchSpectator
     * const MatchSpectator = await prisma.matchSpectator.create({
     *   data: {
     *     // ... data to create a MatchSpectator
     *   }
     * })
     * 
     */
    create<T extends MatchSpectatorCreateArgs>(args: SelectSubset<T, MatchSpectatorCreateArgs<ExtArgs>>): Prisma__MatchSpectatorClient<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchSpectators.
     * @param {MatchSpectatorCreateManyArgs} args - Arguments to create many MatchSpectators.
     * @example
     * // Create many MatchSpectators
     * const matchSpectator = await prisma.matchSpectator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchSpectatorCreateManyArgs>(args?: SelectSubset<T, MatchSpectatorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchSpectators and returns the data saved in the database.
     * @param {MatchSpectatorCreateManyAndReturnArgs} args - Arguments to create many MatchSpectators.
     * @example
     * // Create many MatchSpectators
     * const matchSpectator = await prisma.matchSpectator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchSpectators and only return the `id`
     * const matchSpectatorWithIdOnly = await prisma.matchSpectator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchSpectatorCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchSpectatorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchSpectator.
     * @param {MatchSpectatorDeleteArgs} args - Arguments to delete one MatchSpectator.
     * @example
     * // Delete one MatchSpectator
     * const MatchSpectator = await prisma.matchSpectator.delete({
     *   where: {
     *     // ... filter to delete one MatchSpectator
     *   }
     * })
     * 
     */
    delete<T extends MatchSpectatorDeleteArgs>(args: SelectSubset<T, MatchSpectatorDeleteArgs<ExtArgs>>): Prisma__MatchSpectatorClient<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchSpectator.
     * @param {MatchSpectatorUpdateArgs} args - Arguments to update one MatchSpectator.
     * @example
     * // Update one MatchSpectator
     * const matchSpectator = await prisma.matchSpectator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchSpectatorUpdateArgs>(args: SelectSubset<T, MatchSpectatorUpdateArgs<ExtArgs>>): Prisma__MatchSpectatorClient<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchSpectators.
     * @param {MatchSpectatorDeleteManyArgs} args - Arguments to filter MatchSpectators to delete.
     * @example
     * // Delete a few MatchSpectators
     * const { count } = await prisma.matchSpectator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchSpectatorDeleteManyArgs>(args?: SelectSubset<T, MatchSpectatorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchSpectators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSpectatorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchSpectators
     * const matchSpectator = await prisma.matchSpectator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchSpectatorUpdateManyArgs>(args: SelectSubset<T, MatchSpectatorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchSpectators and returns the data updated in the database.
     * @param {MatchSpectatorUpdateManyAndReturnArgs} args - Arguments to update many MatchSpectators.
     * @example
     * // Update many MatchSpectators
     * const matchSpectator = await prisma.matchSpectator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchSpectators and only return the `id`
     * const matchSpectatorWithIdOnly = await prisma.matchSpectator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchSpectatorUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchSpectatorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchSpectator.
     * @param {MatchSpectatorUpsertArgs} args - Arguments to update or create a MatchSpectator.
     * @example
     * // Update or create a MatchSpectator
     * const matchSpectator = await prisma.matchSpectator.upsert({
     *   create: {
     *     // ... data to create a MatchSpectator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchSpectator we want to update
     *   }
     * })
     */
    upsert<T extends MatchSpectatorUpsertArgs>(args: SelectSubset<T, MatchSpectatorUpsertArgs<ExtArgs>>): Prisma__MatchSpectatorClient<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchSpectators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSpectatorCountArgs} args - Arguments to filter MatchSpectators to count.
     * @example
     * // Count the number of MatchSpectators
     * const count = await prisma.matchSpectator.count({
     *   where: {
     *     // ... the filter for the MatchSpectators we want to count
     *   }
     * })
    **/
    count<T extends MatchSpectatorCountArgs>(
      args?: Subset<T, MatchSpectatorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchSpectatorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchSpectator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSpectatorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchSpectatorAggregateArgs>(args: Subset<T, MatchSpectatorAggregateArgs>): Prisma.PrismaPromise<GetMatchSpectatorAggregateType<T>>

    /**
     * Group by MatchSpectator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSpectatorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchSpectatorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchSpectatorGroupByArgs['orderBy'] }
        : { orderBy?: MatchSpectatorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchSpectatorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchSpectatorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchSpectator model
   */
  readonly fields: MatchSpectatorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchSpectator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchSpectatorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchSpectator model
   */
  interface MatchSpectatorFieldRefs {
    readonly id: FieldRef<"MatchSpectator", 'String'>
    readonly userId: FieldRef<"MatchSpectator", 'String'>
    readonly username: FieldRef<"MatchSpectator", 'String'>
    readonly matchId: FieldRef<"MatchSpectator", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MatchSpectator findUnique
   */
  export type MatchSpectatorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
    /**
     * Filter, which MatchSpectator to fetch.
     */
    where: MatchSpectatorWhereUniqueInput
  }

  /**
   * MatchSpectator findUniqueOrThrow
   */
  export type MatchSpectatorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
    /**
     * Filter, which MatchSpectator to fetch.
     */
    where: MatchSpectatorWhereUniqueInput
  }

  /**
   * MatchSpectator findFirst
   */
  export type MatchSpectatorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
    /**
     * Filter, which MatchSpectator to fetch.
     */
    where?: MatchSpectatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSpectators to fetch.
     */
    orderBy?: MatchSpectatorOrderByWithRelationInput | MatchSpectatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchSpectators.
     */
    cursor?: MatchSpectatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSpectators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSpectators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchSpectators.
     */
    distinct?: MatchSpectatorScalarFieldEnum | MatchSpectatorScalarFieldEnum[]
  }

  /**
   * MatchSpectator findFirstOrThrow
   */
  export type MatchSpectatorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
    /**
     * Filter, which MatchSpectator to fetch.
     */
    where?: MatchSpectatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSpectators to fetch.
     */
    orderBy?: MatchSpectatorOrderByWithRelationInput | MatchSpectatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchSpectators.
     */
    cursor?: MatchSpectatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSpectators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSpectators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchSpectators.
     */
    distinct?: MatchSpectatorScalarFieldEnum | MatchSpectatorScalarFieldEnum[]
  }

  /**
   * MatchSpectator findMany
   */
  export type MatchSpectatorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
    /**
     * Filter, which MatchSpectators to fetch.
     */
    where?: MatchSpectatorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSpectators to fetch.
     */
    orderBy?: MatchSpectatorOrderByWithRelationInput | MatchSpectatorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchSpectators.
     */
    cursor?: MatchSpectatorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSpectators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSpectators.
     */
    skip?: number
    distinct?: MatchSpectatorScalarFieldEnum | MatchSpectatorScalarFieldEnum[]
  }

  /**
   * MatchSpectator create
   */
  export type MatchSpectatorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchSpectator.
     */
    data: XOR<MatchSpectatorCreateInput, MatchSpectatorUncheckedCreateInput>
  }

  /**
   * MatchSpectator createMany
   */
  export type MatchSpectatorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchSpectators.
     */
    data: MatchSpectatorCreateManyInput | MatchSpectatorCreateManyInput[]
  }

  /**
   * MatchSpectator createManyAndReturn
   */
  export type MatchSpectatorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * The data used to create many MatchSpectators.
     */
    data: MatchSpectatorCreateManyInput | MatchSpectatorCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchSpectator update
   */
  export type MatchSpectatorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchSpectator.
     */
    data: XOR<MatchSpectatorUpdateInput, MatchSpectatorUncheckedUpdateInput>
    /**
     * Choose, which MatchSpectator to update.
     */
    where: MatchSpectatorWhereUniqueInput
  }

  /**
   * MatchSpectator updateMany
   */
  export type MatchSpectatorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchSpectators.
     */
    data: XOR<MatchSpectatorUpdateManyMutationInput, MatchSpectatorUncheckedUpdateManyInput>
    /**
     * Filter which MatchSpectators to update
     */
    where?: MatchSpectatorWhereInput
    /**
     * Limit how many MatchSpectators to update.
     */
    limit?: number
  }

  /**
   * MatchSpectator updateManyAndReturn
   */
  export type MatchSpectatorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * The data used to update MatchSpectators.
     */
    data: XOR<MatchSpectatorUpdateManyMutationInput, MatchSpectatorUncheckedUpdateManyInput>
    /**
     * Filter which MatchSpectators to update
     */
    where?: MatchSpectatorWhereInput
    /**
     * Limit how many MatchSpectators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchSpectator upsert
   */
  export type MatchSpectatorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchSpectator to update in case it exists.
     */
    where: MatchSpectatorWhereUniqueInput
    /**
     * In case the MatchSpectator found by the `where` argument doesn't exist, create a new MatchSpectator with this data.
     */
    create: XOR<MatchSpectatorCreateInput, MatchSpectatorUncheckedCreateInput>
    /**
     * In case the MatchSpectator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchSpectatorUpdateInput, MatchSpectatorUncheckedUpdateInput>
  }

  /**
   * MatchSpectator delete
   */
  export type MatchSpectatorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
    /**
     * Filter which MatchSpectator to delete.
     */
    where: MatchSpectatorWhereUniqueInput
  }

  /**
   * MatchSpectator deleteMany
   */
  export type MatchSpectatorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchSpectators to delete
     */
    where?: MatchSpectatorWhereInput
    /**
     * Limit how many MatchSpectators to delete.
     */
    limit?: number
  }

  /**
   * MatchSpectator without action
   */
  export type MatchSpectatorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
  }


  /**
   * Model MatchPlayer
   */

  export type AggregateMatchPlayer = {
    _count: MatchPlayerCountAggregateOutputType | null
    _avg: MatchPlayerAvgAggregateOutputType | null
    _sum: MatchPlayerSumAggregateOutputType | null
    _min: MatchPlayerMinAggregateOutputType | null
    _max: MatchPlayerMaxAggregateOutputType | null
  }

  export type MatchPlayerAvgAggregateOutputType = {
    finalScore: number | null
    rankChange: number | null
  }

  export type MatchPlayerSumAggregateOutputType = {
    finalScore: number | null
    rankChange: number | null
  }

  export type MatchPlayerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    avatarUrl: string | null
    isAI: boolean | null
    finalScore: number | null
    isReady: boolean | null
    isHost: boolean | null
    characterId: string | null
    paddleId: string | null
    rankTier: string | null
    rankDivision: string | null
    rankChange: number | null
  }

  export type MatchPlayerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    username: string | null
    avatarUrl: string | null
    isAI: boolean | null
    finalScore: number | null
    isReady: boolean | null
    isHost: boolean | null
    characterId: string | null
    paddleId: string | null
    rankTier: string | null
    rankDivision: string | null
    rankChange: number | null
  }

  export type MatchPlayerCountAggregateOutputType = {
    id: number
    userId: number
    username: number
    avatarUrl: number
    isAI: number
    finalScore: number
    isReady: number
    isHost: number
    characterId: number
    paddleId: number
    rankTier: number
    rankDivision: number
    rankChange: number
    _all: number
  }


  export type MatchPlayerAvgAggregateInputType = {
    finalScore?: true
    rankChange?: true
  }

  export type MatchPlayerSumAggregateInputType = {
    finalScore?: true
    rankChange?: true
  }

  export type MatchPlayerMinAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    avatarUrl?: true
    isAI?: true
    finalScore?: true
    isReady?: true
    isHost?: true
    characterId?: true
    paddleId?: true
    rankTier?: true
    rankDivision?: true
    rankChange?: true
  }

  export type MatchPlayerMaxAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    avatarUrl?: true
    isAI?: true
    finalScore?: true
    isReady?: true
    isHost?: true
    characterId?: true
    paddleId?: true
    rankTier?: true
    rankDivision?: true
    rankChange?: true
  }

  export type MatchPlayerCountAggregateInputType = {
    id?: true
    userId?: true
    username?: true
    avatarUrl?: true
    isAI?: true
    finalScore?: true
    isReady?: true
    isHost?: true
    characterId?: true
    paddleId?: true
    rankTier?: true
    rankDivision?: true
    rankChange?: true
    _all?: true
  }

  export type MatchPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchPlayer to aggregate.
     */
    where?: MatchPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayers to fetch.
     */
    orderBy?: MatchPlayerOrderByWithRelationInput | MatchPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchPlayers
    **/
    _count?: true | MatchPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchPlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchPlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchPlayerMaxAggregateInputType
  }

  export type GetMatchPlayerAggregateType<T extends MatchPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchPlayer[P]>
      : GetScalarType<T[P], AggregateMatchPlayer[P]>
  }




  export type MatchPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchPlayerWhereInput
    orderBy?: MatchPlayerOrderByWithAggregationInput | MatchPlayerOrderByWithAggregationInput[]
    by: MatchPlayerScalarFieldEnum[] | MatchPlayerScalarFieldEnum
    having?: MatchPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchPlayerCountAggregateInputType | true
    _avg?: MatchPlayerAvgAggregateInputType
    _sum?: MatchPlayerSumAggregateInputType
    _min?: MatchPlayerMinAggregateInputType
    _max?: MatchPlayerMaxAggregateInputType
  }

  export type MatchPlayerGroupByOutputType = {
    id: string
    userId: string | null
    username: string
    avatarUrl: string | null
    isAI: boolean
    finalScore: number
    isReady: boolean
    isHost: boolean
    characterId: string
    paddleId: string
    rankTier: string
    rankDivision: string
    rankChange: number | null
    _count: MatchPlayerCountAggregateOutputType | null
    _avg: MatchPlayerAvgAggregateOutputType | null
    _sum: MatchPlayerSumAggregateOutputType | null
    _min: MatchPlayerMinAggregateOutputType | null
    _max: MatchPlayerMaxAggregateOutputType | null
  }

  type GetMatchPlayerGroupByPayload<T extends MatchPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], MatchPlayerGroupByOutputType[P]>
        }
      >
    >


  export type MatchPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    avatarUrl?: boolean
    isAI?: boolean
    finalScore?: boolean
    isReady?: boolean
    isHost?: boolean
    characterId?: boolean
    paddleId?: boolean
    rankTier?: boolean
    rankDivision?: boolean
    rankChange?: boolean
    matchAsOpponent1?: boolean | MatchPlayer$matchAsOpponent1Args<ExtArgs>
    matchAsOpponent2?: boolean | MatchPlayer$matchAsOpponent2Args<ExtArgs>
    User?: boolean | MatchPlayer$UserArgs<ExtArgs>
  }, ExtArgs["result"]["matchPlayer"]>

  export type MatchPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    avatarUrl?: boolean
    isAI?: boolean
    finalScore?: boolean
    isReady?: boolean
    isHost?: boolean
    characterId?: boolean
    paddleId?: boolean
    rankTier?: boolean
    rankDivision?: boolean
    rankChange?: boolean
    User?: boolean | MatchPlayer$UserArgs<ExtArgs>
  }, ExtArgs["result"]["matchPlayer"]>

  export type MatchPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    username?: boolean
    avatarUrl?: boolean
    isAI?: boolean
    finalScore?: boolean
    isReady?: boolean
    isHost?: boolean
    characterId?: boolean
    paddleId?: boolean
    rankTier?: boolean
    rankDivision?: boolean
    rankChange?: boolean
    User?: boolean | MatchPlayer$UserArgs<ExtArgs>
  }, ExtArgs["result"]["matchPlayer"]>

  export type MatchPlayerSelectScalar = {
    id?: boolean
    userId?: boolean
    username?: boolean
    avatarUrl?: boolean
    isAI?: boolean
    finalScore?: boolean
    isReady?: boolean
    isHost?: boolean
    characterId?: boolean
    paddleId?: boolean
    rankTier?: boolean
    rankDivision?: boolean
    rankChange?: boolean
  }

  export type MatchPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "username" | "avatarUrl" | "isAI" | "finalScore" | "isReady" | "isHost" | "characterId" | "paddleId" | "rankTier" | "rankDivision" | "rankChange", ExtArgs["result"]["matchPlayer"]>
  export type MatchPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchAsOpponent1?: boolean | MatchPlayer$matchAsOpponent1Args<ExtArgs>
    matchAsOpponent2?: boolean | MatchPlayer$matchAsOpponent2Args<ExtArgs>
    User?: boolean | MatchPlayer$UserArgs<ExtArgs>
  }
  export type MatchPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | MatchPlayer$UserArgs<ExtArgs>
  }
  export type MatchPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | MatchPlayer$UserArgs<ExtArgs>
  }

  export type $MatchPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchPlayer"
    objects: {
      matchAsOpponent1: Prisma.$MatchPayload<ExtArgs> | null
      matchAsOpponent2: Prisma.$MatchPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      username: string
      avatarUrl: string | null
      isAI: boolean
      finalScore: number
      isReady: boolean
      isHost: boolean
      characterId: string
      paddleId: string
      rankTier: string
      rankDivision: string
      rankChange: number | null
    }, ExtArgs["result"]["matchPlayer"]>
    composites: {}
  }

  type MatchPlayerGetPayload<S extends boolean | null | undefined | MatchPlayerDefaultArgs> = $Result.GetResult<Prisma.$MatchPlayerPayload, S>

  type MatchPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchPlayerCountAggregateInputType | true
    }

  export interface MatchPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchPlayer'], meta: { name: 'MatchPlayer' } }
    /**
     * Find zero or one MatchPlayer that matches the filter.
     * @param {MatchPlayerFindUniqueArgs} args - Arguments to find a MatchPlayer
     * @example
     * // Get one MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchPlayerFindUniqueArgs>(args: SelectSubset<T, MatchPlayerFindUniqueArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchPlayerFindUniqueOrThrowArgs} args - Arguments to find a MatchPlayer
     * @example
     * // Get one MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerFindFirstArgs} args - Arguments to find a MatchPlayer
     * @example
     * // Get one MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchPlayerFindFirstArgs>(args?: SelectSubset<T, MatchPlayerFindFirstArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerFindFirstOrThrowArgs} args - Arguments to find a MatchPlayer
     * @example
     * // Get one MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchPlayers
     * const matchPlayers = await prisma.matchPlayer.findMany()
     * 
     * // Get first 10 MatchPlayers
     * const matchPlayers = await prisma.matchPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchPlayerWithIdOnly = await prisma.matchPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchPlayerFindManyArgs>(args?: SelectSubset<T, MatchPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchPlayer.
     * @param {MatchPlayerCreateArgs} args - Arguments to create a MatchPlayer.
     * @example
     * // Create one MatchPlayer
     * const MatchPlayer = await prisma.matchPlayer.create({
     *   data: {
     *     // ... data to create a MatchPlayer
     *   }
     * })
     * 
     */
    create<T extends MatchPlayerCreateArgs>(args: SelectSubset<T, MatchPlayerCreateArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchPlayers.
     * @param {MatchPlayerCreateManyArgs} args - Arguments to create many MatchPlayers.
     * @example
     * // Create many MatchPlayers
     * const matchPlayer = await prisma.matchPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchPlayerCreateManyArgs>(args?: SelectSubset<T, MatchPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchPlayers and returns the data saved in the database.
     * @param {MatchPlayerCreateManyAndReturnArgs} args - Arguments to create many MatchPlayers.
     * @example
     * // Create many MatchPlayers
     * const matchPlayer = await prisma.matchPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchPlayers and only return the `id`
     * const matchPlayerWithIdOnly = await prisma.matchPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchPlayer.
     * @param {MatchPlayerDeleteArgs} args - Arguments to delete one MatchPlayer.
     * @example
     * // Delete one MatchPlayer
     * const MatchPlayer = await prisma.matchPlayer.delete({
     *   where: {
     *     // ... filter to delete one MatchPlayer
     *   }
     * })
     * 
     */
    delete<T extends MatchPlayerDeleteArgs>(args: SelectSubset<T, MatchPlayerDeleteArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchPlayer.
     * @param {MatchPlayerUpdateArgs} args - Arguments to update one MatchPlayer.
     * @example
     * // Update one MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchPlayerUpdateArgs>(args: SelectSubset<T, MatchPlayerUpdateArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchPlayers.
     * @param {MatchPlayerDeleteManyArgs} args - Arguments to filter MatchPlayers to delete.
     * @example
     * // Delete a few MatchPlayers
     * const { count } = await prisma.matchPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchPlayerDeleteManyArgs>(args?: SelectSubset<T, MatchPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchPlayers
     * const matchPlayer = await prisma.matchPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchPlayerUpdateManyArgs>(args: SelectSubset<T, MatchPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchPlayers and returns the data updated in the database.
     * @param {MatchPlayerUpdateManyAndReturnArgs} args - Arguments to update many MatchPlayers.
     * @example
     * // Update many MatchPlayers
     * const matchPlayer = await prisma.matchPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchPlayers and only return the `id`
     * const matchPlayerWithIdOnly = await prisma.matchPlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchPlayer.
     * @param {MatchPlayerUpsertArgs} args - Arguments to update or create a MatchPlayer.
     * @example
     * // Update or create a MatchPlayer
     * const matchPlayer = await prisma.matchPlayer.upsert({
     *   create: {
     *     // ... data to create a MatchPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchPlayer we want to update
     *   }
     * })
     */
    upsert<T extends MatchPlayerUpsertArgs>(args: SelectSubset<T, MatchPlayerUpsertArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerCountArgs} args - Arguments to filter MatchPlayers to count.
     * @example
     * // Count the number of MatchPlayers
     * const count = await prisma.matchPlayer.count({
     *   where: {
     *     // ... the filter for the MatchPlayers we want to count
     *   }
     * })
    **/
    count<T extends MatchPlayerCountArgs>(
      args?: Subset<T, MatchPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchPlayerAggregateArgs>(args: Subset<T, MatchPlayerAggregateArgs>): Prisma.PrismaPromise<GetMatchPlayerAggregateType<T>>

    /**
     * Group by MatchPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchPlayerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchPlayerGroupByArgs['orderBy'] }
        : { orderBy?: MatchPlayerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchPlayer model
   */
  readonly fields: MatchPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matchAsOpponent1<T extends MatchPlayer$matchAsOpponent1Args<ExtArgs> = {}>(args?: Subset<T, MatchPlayer$matchAsOpponent1Args<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    matchAsOpponent2<T extends MatchPlayer$matchAsOpponent2Args<ExtArgs> = {}>(args?: Subset<T, MatchPlayer$matchAsOpponent2Args<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    User<T extends MatchPlayer$UserArgs<ExtArgs> = {}>(args?: Subset<T, MatchPlayer$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchPlayer model
   */
  interface MatchPlayerFieldRefs {
    readonly id: FieldRef<"MatchPlayer", 'String'>
    readonly userId: FieldRef<"MatchPlayer", 'String'>
    readonly username: FieldRef<"MatchPlayer", 'String'>
    readonly avatarUrl: FieldRef<"MatchPlayer", 'String'>
    readonly isAI: FieldRef<"MatchPlayer", 'Boolean'>
    readonly finalScore: FieldRef<"MatchPlayer", 'Int'>
    readonly isReady: FieldRef<"MatchPlayer", 'Boolean'>
    readonly isHost: FieldRef<"MatchPlayer", 'Boolean'>
    readonly characterId: FieldRef<"MatchPlayer", 'String'>
    readonly paddleId: FieldRef<"MatchPlayer", 'String'>
    readonly rankTier: FieldRef<"MatchPlayer", 'String'>
    readonly rankDivision: FieldRef<"MatchPlayer", 'String'>
    readonly rankChange: FieldRef<"MatchPlayer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MatchPlayer findUnique
   */
  export type MatchPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayer to fetch.
     */
    where: MatchPlayerWhereUniqueInput
  }

  /**
   * MatchPlayer findUniqueOrThrow
   */
  export type MatchPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayer to fetch.
     */
    where: MatchPlayerWhereUniqueInput
  }

  /**
   * MatchPlayer findFirst
   */
  export type MatchPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayer to fetch.
     */
    where?: MatchPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayers to fetch.
     */
    orderBy?: MatchPlayerOrderByWithRelationInput | MatchPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchPlayers.
     */
    cursor?: MatchPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchPlayers.
     */
    distinct?: MatchPlayerScalarFieldEnum | MatchPlayerScalarFieldEnum[]
  }

  /**
   * MatchPlayer findFirstOrThrow
   */
  export type MatchPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayer to fetch.
     */
    where?: MatchPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayers to fetch.
     */
    orderBy?: MatchPlayerOrderByWithRelationInput | MatchPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchPlayers.
     */
    cursor?: MatchPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchPlayers.
     */
    distinct?: MatchPlayerScalarFieldEnum | MatchPlayerScalarFieldEnum[]
  }

  /**
   * MatchPlayer findMany
   */
  export type MatchPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter, which MatchPlayers to fetch.
     */
    where?: MatchPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchPlayers to fetch.
     */
    orderBy?: MatchPlayerOrderByWithRelationInput | MatchPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchPlayers.
     */
    cursor?: MatchPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchPlayers.
     */
    skip?: number
    distinct?: MatchPlayerScalarFieldEnum | MatchPlayerScalarFieldEnum[]
  }

  /**
   * MatchPlayer create
   */
  export type MatchPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchPlayer.
     */
    data: XOR<MatchPlayerCreateInput, MatchPlayerUncheckedCreateInput>
  }

  /**
   * MatchPlayer createMany
   */
  export type MatchPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchPlayers.
     */
    data: MatchPlayerCreateManyInput | MatchPlayerCreateManyInput[]
  }

  /**
   * MatchPlayer createManyAndReturn
   */
  export type MatchPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many MatchPlayers.
     */
    data: MatchPlayerCreateManyInput | MatchPlayerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchPlayer update
   */
  export type MatchPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchPlayer.
     */
    data: XOR<MatchPlayerUpdateInput, MatchPlayerUncheckedUpdateInput>
    /**
     * Choose, which MatchPlayer to update.
     */
    where: MatchPlayerWhereUniqueInput
  }

  /**
   * MatchPlayer updateMany
   */
  export type MatchPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchPlayers.
     */
    data: XOR<MatchPlayerUpdateManyMutationInput, MatchPlayerUncheckedUpdateManyInput>
    /**
     * Filter which MatchPlayers to update
     */
    where?: MatchPlayerWhereInput
    /**
     * Limit how many MatchPlayers to update.
     */
    limit?: number
  }

  /**
   * MatchPlayer updateManyAndReturn
   */
  export type MatchPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * The data used to update MatchPlayers.
     */
    data: XOR<MatchPlayerUpdateManyMutationInput, MatchPlayerUncheckedUpdateManyInput>
    /**
     * Filter which MatchPlayers to update
     */
    where?: MatchPlayerWhereInput
    /**
     * Limit how many MatchPlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchPlayer upsert
   */
  export type MatchPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchPlayer to update in case it exists.
     */
    where: MatchPlayerWhereUniqueInput
    /**
     * In case the MatchPlayer found by the `where` argument doesn't exist, create a new MatchPlayer with this data.
     */
    create: XOR<MatchPlayerCreateInput, MatchPlayerUncheckedCreateInput>
    /**
     * In case the MatchPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchPlayerUpdateInput, MatchPlayerUncheckedUpdateInput>
  }

  /**
   * MatchPlayer delete
   */
  export type MatchPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    /**
     * Filter which MatchPlayer to delete.
     */
    where: MatchPlayerWhereUniqueInput
  }

  /**
   * MatchPlayer deleteMany
   */
  export type MatchPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchPlayers to delete
     */
    where?: MatchPlayerWhereInput
    /**
     * Limit how many MatchPlayers to delete.
     */
    limit?: number
  }

  /**
   * MatchPlayer.matchAsOpponent1
   */
  export type MatchPlayer$matchAsOpponent1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
  }

  /**
   * MatchPlayer.matchAsOpponent2
   */
  export type MatchPlayer$matchAsOpponent2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
  }

  /**
   * MatchPlayer.User
   */
  export type MatchPlayer$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MatchPlayer without action
   */
  export type MatchPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
  }


  /**
   * Model Match
   */

  export type AggregateMatch = {
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  export type MatchAvgAggregateOutputType = {
    duration: number | null
  }

  export type MatchSumAggregateOutputType = {
    duration: number | null
  }

  export type MatchMinAggregateOutputType = {
    id: string | null
    mode: $Enums.GameMode | null
    status: $Enums.GameStatus | null
    duration: number | null
    createdAt: Date | null
    confirmedAt: Date | null
    winnerId: string | null
    opponent1Id: string | null
    opponent2Id: string | null
  }

  export type MatchMaxAggregateOutputType = {
    id: string | null
    mode: $Enums.GameMode | null
    status: $Enums.GameStatus | null
    duration: number | null
    createdAt: Date | null
    confirmedAt: Date | null
    winnerId: string | null
    opponent1Id: string | null
    opponent2Id: string | null
  }

  export type MatchCountAggregateOutputType = {
    id: number
    mode: number
    status: number
    duration: number
    createdAt: number
    confirmedAt: number
    winnerId: number
    opponent1Id: number
    opponent2Id: number
    _all: number
  }


  export type MatchAvgAggregateInputType = {
    duration?: true
  }

  export type MatchSumAggregateInputType = {
    duration?: true
  }

  export type MatchMinAggregateInputType = {
    id?: true
    mode?: true
    status?: true
    duration?: true
    createdAt?: true
    confirmedAt?: true
    winnerId?: true
    opponent1Id?: true
    opponent2Id?: true
  }

  export type MatchMaxAggregateInputType = {
    id?: true
    mode?: true
    status?: true
    duration?: true
    createdAt?: true
    confirmedAt?: true
    winnerId?: true
    opponent1Id?: true
    opponent2Id?: true
  }

  export type MatchCountAggregateInputType = {
    id?: true
    mode?: true
    status?: true
    duration?: true
    createdAt?: true
    confirmedAt?: true
    winnerId?: true
    opponent1Id?: true
    opponent2Id?: true
    _all?: true
  }

  export type MatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Match to aggregate.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Matches
    **/
    _count?: true | MatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchMaxAggregateInputType
  }

  export type GetMatchAggregateType<T extends MatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatch[P]>
      : GetScalarType<T[P], AggregateMatch[P]>
  }




  export type MatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchWhereInput
    orderBy?: MatchOrderByWithAggregationInput | MatchOrderByWithAggregationInput[]
    by: MatchScalarFieldEnum[] | MatchScalarFieldEnum
    having?: MatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchCountAggregateInputType | true
    _avg?: MatchAvgAggregateInputType
    _sum?: MatchSumAggregateInputType
    _min?: MatchMinAggregateInputType
    _max?: MatchMaxAggregateInputType
  }

  export type MatchGroupByOutputType = {
    id: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt: Date
    confirmedAt: Date | null
    winnerId: string | null
    opponent1Id: string
    opponent2Id: string | null
    _count: MatchCountAggregateOutputType | null
    _avg: MatchAvgAggregateOutputType | null
    _sum: MatchSumAggregateOutputType | null
    _min: MatchMinAggregateOutputType | null
    _max: MatchMaxAggregateOutputType | null
  }

  type GetMatchGroupByPayload<T extends MatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchGroupByOutputType[P]>
            : GetScalarType<T[P], MatchGroupByOutputType[P]>
        }
      >
    >


  export type MatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mode?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
    winnerId?: boolean
    opponent1Id?: boolean
    opponent2Id?: boolean
    opponent1?: boolean | MatchPlayerDefaultArgs<ExtArgs>
    opponent2?: boolean | Match$opponent2Args<ExtArgs>
    spectators?: boolean | Match$spectatorsArgs<ExtArgs>
    bets?: boolean | Match$betsArgs<ExtArgs>
    matchSetting?: boolean | Match$matchSettingArgs<ExtArgs>
    invitation?: boolean | Match$invitationArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mode?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
    winnerId?: boolean
    opponent1Id?: boolean
    opponent2Id?: boolean
    opponent1?: boolean | MatchPlayerDefaultArgs<ExtArgs>
    opponent2?: boolean | Match$opponent2Args<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mode?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
    winnerId?: boolean
    opponent1Id?: boolean
    opponent2Id?: boolean
    opponent1?: boolean | MatchPlayerDefaultArgs<ExtArgs>
    opponent2?: boolean | Match$opponent2Args<ExtArgs>
  }, ExtArgs["result"]["match"]>

  export type MatchSelectScalar = {
    id?: boolean
    mode?: boolean
    status?: boolean
    duration?: boolean
    createdAt?: boolean
    confirmedAt?: boolean
    winnerId?: boolean
    opponent1Id?: boolean
    opponent2Id?: boolean
  }

  export type MatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mode" | "status" | "duration" | "createdAt" | "confirmedAt" | "winnerId" | "opponent1Id" | "opponent2Id", ExtArgs["result"]["match"]>
  export type MatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opponent1?: boolean | MatchPlayerDefaultArgs<ExtArgs>
    opponent2?: boolean | Match$opponent2Args<ExtArgs>
    spectators?: boolean | Match$spectatorsArgs<ExtArgs>
    bets?: boolean | Match$betsArgs<ExtArgs>
    matchSetting?: boolean | Match$matchSettingArgs<ExtArgs>
    invitation?: boolean | Match$invitationArgs<ExtArgs>
    _count?: boolean | MatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opponent1?: boolean | MatchPlayerDefaultArgs<ExtArgs>
    opponent2?: boolean | Match$opponent2Args<ExtArgs>
  }
  export type MatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opponent1?: boolean | MatchPlayerDefaultArgs<ExtArgs>
    opponent2?: boolean | Match$opponent2Args<ExtArgs>
  }

  export type $MatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Match"
    objects: {
      opponent1: Prisma.$MatchPlayerPayload<ExtArgs>
      opponent2: Prisma.$MatchPlayerPayload<ExtArgs> | null
      spectators: Prisma.$MatchSpectatorPayload<ExtArgs>[]
      bets: Prisma.$BetPayload<ExtArgs>[]
      matchSetting: Prisma.$MatchSettingPayload<ExtArgs> | null
      invitation: Prisma.$InvitationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mode: $Enums.GameMode
      status: $Enums.GameStatus
      duration: number
      createdAt: Date
      confirmedAt: Date | null
      winnerId: string | null
      opponent1Id: string
      opponent2Id: string | null
    }, ExtArgs["result"]["match"]>
    composites: {}
  }

  type MatchGetPayload<S extends boolean | null | undefined | MatchDefaultArgs> = $Result.GetResult<Prisma.$MatchPayload, S>

  type MatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchCountAggregateInputType | true
    }

  export interface MatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Match'], meta: { name: 'Match' } }
    /**
     * Find zero or one Match that matches the filter.
     * @param {MatchFindUniqueArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchFindUniqueArgs>(args: SelectSubset<T, MatchFindUniqueArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Match that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchFindUniqueOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchFindFirstArgs>(args?: SelectSubset<T, MatchFindFirstArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Match that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindFirstOrThrowArgs} args - Arguments to find a Match
     * @example
     * // Get one Match
     * const match = await prisma.match.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Matches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matches
     * const matches = await prisma.match.findMany()
     * 
     * // Get first 10 Matches
     * const matches = await prisma.match.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchWithIdOnly = await prisma.match.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchFindManyArgs>(args?: SelectSubset<T, MatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Match.
     * @param {MatchCreateArgs} args - Arguments to create a Match.
     * @example
     * // Create one Match
     * const Match = await prisma.match.create({
     *   data: {
     *     // ... data to create a Match
     *   }
     * })
     * 
     */
    create<T extends MatchCreateArgs>(args: SelectSubset<T, MatchCreateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Matches.
     * @param {MatchCreateManyArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchCreateManyArgs>(args?: SelectSubset<T, MatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Matches and returns the data saved in the database.
     * @param {MatchCreateManyAndReturnArgs} args - Arguments to create many Matches.
     * @example
     * // Create many Matches
     * const match = await prisma.match.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Match.
     * @param {MatchDeleteArgs} args - Arguments to delete one Match.
     * @example
     * // Delete one Match
     * const Match = await prisma.match.delete({
     *   where: {
     *     // ... filter to delete one Match
     *   }
     * })
     * 
     */
    delete<T extends MatchDeleteArgs>(args: SelectSubset<T, MatchDeleteArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Match.
     * @param {MatchUpdateArgs} args - Arguments to update one Match.
     * @example
     * // Update one Match
     * const match = await prisma.match.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchUpdateArgs>(args: SelectSubset<T, MatchUpdateArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Matches.
     * @param {MatchDeleteManyArgs} args - Arguments to filter Matches to delete.
     * @example
     * // Delete a few Matches
     * const { count } = await prisma.match.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchDeleteManyArgs>(args?: SelectSubset<T, MatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchUpdateManyArgs>(args: SelectSubset<T, MatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matches and returns the data updated in the database.
     * @param {MatchUpdateManyAndReturnArgs} args - Arguments to update many Matches.
     * @example
     * // Update many Matches
     * const match = await prisma.match.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Matches and only return the `id`
     * const matchWithIdOnly = await prisma.match.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Match.
     * @param {MatchUpsertArgs} args - Arguments to update or create a Match.
     * @example
     * // Update or create a Match
     * const match = await prisma.match.upsert({
     *   create: {
     *     // ... data to create a Match
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Match we want to update
     *   }
     * })
     */
    upsert<T extends MatchUpsertArgs>(args: SelectSubset<T, MatchUpsertArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Matches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchCountArgs} args - Arguments to filter Matches to count.
     * @example
     * // Count the number of Matches
     * const count = await prisma.match.count({
     *   where: {
     *     // ... the filter for the Matches we want to count
     *   }
     * })
    **/
    count<T extends MatchCountArgs>(
      args?: Subset<T, MatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchAggregateArgs>(args: Subset<T, MatchAggregateArgs>): Prisma.PrismaPromise<GetMatchAggregateType<T>>

    /**
     * Group by Match.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchGroupByArgs['orderBy'] }
        : { orderBy?: MatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Match model
   */
  readonly fields: MatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Match.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    opponent1<T extends MatchPlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchPlayerDefaultArgs<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opponent2<T extends Match$opponent2Args<ExtArgs> = {}>(args?: Subset<T, Match$opponent2Args<ExtArgs>>): Prisma__MatchPlayerClient<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    spectators<T extends Match$spectatorsArgs<ExtArgs> = {}>(args?: Subset<T, Match$spectatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bets<T extends Match$betsArgs<ExtArgs> = {}>(args?: Subset<T, Match$betsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchSetting<T extends Match$matchSettingArgs<ExtArgs> = {}>(args?: Subset<T, Match$matchSettingArgs<ExtArgs>>): Prisma__MatchSettingClient<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invitation<T extends Match$invitationArgs<ExtArgs> = {}>(args?: Subset<T, Match$invitationArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Match model
   */
  interface MatchFieldRefs {
    readonly id: FieldRef<"Match", 'String'>
    readonly mode: FieldRef<"Match", 'GameMode'>
    readonly status: FieldRef<"Match", 'GameStatus'>
    readonly duration: FieldRef<"Match", 'Int'>
    readonly createdAt: FieldRef<"Match", 'DateTime'>
    readonly confirmedAt: FieldRef<"Match", 'DateTime'>
    readonly winnerId: FieldRef<"Match", 'String'>
    readonly opponent1Id: FieldRef<"Match", 'String'>
    readonly opponent2Id: FieldRef<"Match", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Match findUnique
   */
  export type MatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findUniqueOrThrow
   */
  export type MatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match findFirst
   */
  export type MatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findFirstOrThrow
   */
  export type MatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Match to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Matches.
     */
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match findMany
   */
  export type MatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter, which Matches to fetch.
     */
    where?: MatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Matches to fetch.
     */
    orderBy?: MatchOrderByWithRelationInput | MatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Matches.
     */
    cursor?: MatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Matches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Matches.
     */
    skip?: number
    distinct?: MatchScalarFieldEnum | MatchScalarFieldEnum[]
  }

  /**
   * Match create
   */
  export type MatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Match.
     */
    data: XOR<MatchCreateInput, MatchUncheckedCreateInput>
  }

  /**
   * Match createMany
   */
  export type MatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
  }

  /**
   * Match createManyAndReturn
   */
  export type MatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to create many Matches.
     */
    data: MatchCreateManyInput | MatchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match update
   */
  export type MatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Match.
     */
    data: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
    /**
     * Choose, which Match to update.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match updateMany
   */
  export type MatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
  }

  /**
   * Match updateManyAndReturn
   */
  export type MatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * The data used to update Matches.
     */
    data: XOR<MatchUpdateManyMutationInput, MatchUncheckedUpdateManyInput>
    /**
     * Filter which Matches to update
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Match upsert
   */
  export type MatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Match to update in case it exists.
     */
    where: MatchWhereUniqueInput
    /**
     * In case the Match found by the `where` argument doesn't exist, create a new Match with this data.
     */
    create: XOR<MatchCreateInput, MatchUncheckedCreateInput>
    /**
     * In case the Match was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchUpdateInput, MatchUncheckedUpdateInput>
  }

  /**
   * Match delete
   */
  export type MatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    /**
     * Filter which Match to delete.
     */
    where: MatchWhereUniqueInput
  }

  /**
   * Match deleteMany
   */
  export type MatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Matches to delete
     */
    where?: MatchWhereInput
    /**
     * Limit how many Matches to delete.
     */
    limit?: number
  }

  /**
   * Match.opponent2
   */
  export type Match$opponent2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    where?: MatchPlayerWhereInput
  }

  /**
   * Match.spectators
   */
  export type Match$spectatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
    where?: MatchSpectatorWhereInput
    orderBy?: MatchSpectatorOrderByWithRelationInput | MatchSpectatorOrderByWithRelationInput[]
    cursor?: MatchSpectatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchSpectatorScalarFieldEnum | MatchSpectatorScalarFieldEnum[]
  }

  /**
   * Match.bets
   */
  export type Match$betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    where?: BetWhereInput
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    cursor?: BetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Match.matchSetting
   */
  export type Match$matchSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingInclude<ExtArgs> | null
    where?: MatchSettingWhereInput
  }

  /**
   * Match.invitation
   */
  export type Match$invitationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
  }

  /**
   * Match without action
   */
  export type MatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
  }


  /**
   * Model MatchSetting
   */

  export type AggregateMatchSetting = {
    _count: MatchSettingCountAggregateOutputType | null
    _avg: MatchSettingAvgAggregateOutputType | null
    _sum: MatchSettingSumAggregateOutputType | null
    _min: MatchSettingMinAggregateOutputType | null
    _max: MatchSettingMaxAggregateOutputType | null
  }

  export type MatchSettingAvgAggregateOutputType = {
    scoreLimit: number | null
    pauseTime: number | null
    requiredCurrency: number | null
  }

  export type MatchSettingSumAggregateOutputType = {
    scoreLimit: number | null
    pauseTime: number | null
    requiredCurrency: number | null
  }

  export type MatchSettingMinAggregateOutputType = {
    id: string | null
    matchId: string | null
    scoreLimit: number | null
    pauseTime: number | null
    allowPowerUps: boolean | null
    aiDifficulty: $Enums.AIDifficulty | null
    createdAt: Date | null
    requiredCurrency: number | null
  }

  export type MatchSettingMaxAggregateOutputType = {
    id: string | null
    matchId: string | null
    scoreLimit: number | null
    pauseTime: number | null
    allowPowerUps: boolean | null
    aiDifficulty: $Enums.AIDifficulty | null
    createdAt: Date | null
    requiredCurrency: number | null
  }

  export type MatchSettingCountAggregateOutputType = {
    id: number
    matchId: number
    scoreLimit: number
    pauseTime: number
    allowPowerUps: number
    aiDifficulty: number
    createdAt: number
    requiredCurrency: number
    _all: number
  }


  export type MatchSettingAvgAggregateInputType = {
    scoreLimit?: true
    pauseTime?: true
    requiredCurrency?: true
  }

  export type MatchSettingSumAggregateInputType = {
    scoreLimit?: true
    pauseTime?: true
    requiredCurrency?: true
  }

  export type MatchSettingMinAggregateInputType = {
    id?: true
    matchId?: true
    scoreLimit?: true
    pauseTime?: true
    allowPowerUps?: true
    aiDifficulty?: true
    createdAt?: true
    requiredCurrency?: true
  }

  export type MatchSettingMaxAggregateInputType = {
    id?: true
    matchId?: true
    scoreLimit?: true
    pauseTime?: true
    allowPowerUps?: true
    aiDifficulty?: true
    createdAt?: true
    requiredCurrency?: true
  }

  export type MatchSettingCountAggregateInputType = {
    id?: true
    matchId?: true
    scoreLimit?: true
    pauseTime?: true
    allowPowerUps?: true
    aiDifficulty?: true
    createdAt?: true
    requiredCurrency?: true
    _all?: true
  }

  export type MatchSettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchSetting to aggregate.
     */
    where?: MatchSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSettings to fetch.
     */
    orderBy?: MatchSettingOrderByWithRelationInput | MatchSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MatchSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MatchSettings
    **/
    _count?: true | MatchSettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatchSettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatchSettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatchSettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatchSettingMaxAggregateInputType
  }

  export type GetMatchSettingAggregateType<T extends MatchSettingAggregateArgs> = {
        [P in keyof T & keyof AggregateMatchSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatchSetting[P]>
      : GetScalarType<T[P], AggregateMatchSetting[P]>
  }




  export type MatchSettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MatchSettingWhereInput
    orderBy?: MatchSettingOrderByWithAggregationInput | MatchSettingOrderByWithAggregationInput[]
    by: MatchSettingScalarFieldEnum[] | MatchSettingScalarFieldEnum
    having?: MatchSettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatchSettingCountAggregateInputType | true
    _avg?: MatchSettingAvgAggregateInputType
    _sum?: MatchSettingSumAggregateInputType
    _min?: MatchSettingMinAggregateInputType
    _max?: MatchSettingMaxAggregateInputType
  }

  export type MatchSettingGroupByOutputType = {
    id: string
    matchId: string
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    aiDifficulty: $Enums.AIDifficulty | null
    createdAt: Date
    requiredCurrency: number
    _count: MatchSettingCountAggregateOutputType | null
    _avg: MatchSettingAvgAggregateOutputType | null
    _sum: MatchSettingSumAggregateOutputType | null
    _min: MatchSettingMinAggregateOutputType | null
    _max: MatchSettingMaxAggregateOutputType | null
  }

  type GetMatchSettingGroupByPayload<T extends MatchSettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MatchSettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatchSettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatchSettingGroupByOutputType[P]>
            : GetScalarType<T[P], MatchSettingGroupByOutputType[P]>
        }
      >
    >


  export type MatchSettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    scoreLimit?: boolean
    pauseTime?: boolean
    allowPowerUps?: boolean
    aiDifficulty?: boolean
    createdAt?: boolean
    requiredCurrency?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchSetting"]>

  export type MatchSettingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    scoreLimit?: boolean
    pauseTime?: boolean
    allowPowerUps?: boolean
    aiDifficulty?: boolean
    createdAt?: boolean
    requiredCurrency?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchSetting"]>

  export type MatchSettingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matchId?: boolean
    scoreLimit?: boolean
    pauseTime?: boolean
    allowPowerUps?: boolean
    aiDifficulty?: boolean
    createdAt?: boolean
    requiredCurrency?: boolean
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["matchSetting"]>

  export type MatchSettingSelectScalar = {
    id?: boolean
    matchId?: boolean
    scoreLimit?: boolean
    pauseTime?: boolean
    allowPowerUps?: boolean
    aiDifficulty?: boolean
    createdAt?: boolean
    requiredCurrency?: boolean
  }

  export type MatchSettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matchId" | "scoreLimit" | "pauseTime" | "allowPowerUps" | "aiDifficulty" | "createdAt" | "requiredCurrency", ExtArgs["result"]["matchSetting"]>
  export type MatchSettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }
  export type MatchSettingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }
  export type MatchSettingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }

  export type $MatchSettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MatchSetting"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      matchId: string
      scoreLimit: number
      pauseTime: number
      allowPowerUps: boolean
      aiDifficulty: $Enums.AIDifficulty | null
      createdAt: Date
      requiredCurrency: number
    }, ExtArgs["result"]["matchSetting"]>
    composites: {}
  }

  type MatchSettingGetPayload<S extends boolean | null | undefined | MatchSettingDefaultArgs> = $Result.GetResult<Prisma.$MatchSettingPayload, S>

  type MatchSettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MatchSettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MatchSettingCountAggregateInputType | true
    }

  export interface MatchSettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MatchSetting'], meta: { name: 'MatchSetting' } }
    /**
     * Find zero or one MatchSetting that matches the filter.
     * @param {MatchSettingFindUniqueArgs} args - Arguments to find a MatchSetting
     * @example
     * // Get one MatchSetting
     * const matchSetting = await prisma.matchSetting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MatchSettingFindUniqueArgs>(args: SelectSubset<T, MatchSettingFindUniqueArgs<ExtArgs>>): Prisma__MatchSettingClient<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MatchSetting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MatchSettingFindUniqueOrThrowArgs} args - Arguments to find a MatchSetting
     * @example
     * // Get one MatchSetting
     * const matchSetting = await prisma.matchSetting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MatchSettingFindUniqueOrThrowArgs>(args: SelectSubset<T, MatchSettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MatchSettingClient<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchSetting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSettingFindFirstArgs} args - Arguments to find a MatchSetting
     * @example
     * // Get one MatchSetting
     * const matchSetting = await prisma.matchSetting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MatchSettingFindFirstArgs>(args?: SelectSubset<T, MatchSettingFindFirstArgs<ExtArgs>>): Prisma__MatchSettingClient<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MatchSetting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSettingFindFirstOrThrowArgs} args - Arguments to find a MatchSetting
     * @example
     * // Get one MatchSetting
     * const matchSetting = await prisma.matchSetting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MatchSettingFindFirstOrThrowArgs>(args?: SelectSubset<T, MatchSettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MatchSettingClient<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MatchSettings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MatchSettings
     * const matchSettings = await prisma.matchSetting.findMany()
     * 
     * // Get first 10 MatchSettings
     * const matchSettings = await prisma.matchSetting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const matchSettingWithIdOnly = await prisma.matchSetting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MatchSettingFindManyArgs>(args?: SelectSubset<T, MatchSettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MatchSetting.
     * @param {MatchSettingCreateArgs} args - Arguments to create a MatchSetting.
     * @example
     * // Create one MatchSetting
     * const MatchSetting = await prisma.matchSetting.create({
     *   data: {
     *     // ... data to create a MatchSetting
     *   }
     * })
     * 
     */
    create<T extends MatchSettingCreateArgs>(args: SelectSubset<T, MatchSettingCreateArgs<ExtArgs>>): Prisma__MatchSettingClient<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MatchSettings.
     * @param {MatchSettingCreateManyArgs} args - Arguments to create many MatchSettings.
     * @example
     * // Create many MatchSettings
     * const matchSetting = await prisma.matchSetting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MatchSettingCreateManyArgs>(args?: SelectSubset<T, MatchSettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MatchSettings and returns the data saved in the database.
     * @param {MatchSettingCreateManyAndReturnArgs} args - Arguments to create many MatchSettings.
     * @example
     * // Create many MatchSettings
     * const matchSetting = await prisma.matchSetting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MatchSettings and only return the `id`
     * const matchSettingWithIdOnly = await prisma.matchSetting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MatchSettingCreateManyAndReturnArgs>(args?: SelectSubset<T, MatchSettingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MatchSetting.
     * @param {MatchSettingDeleteArgs} args - Arguments to delete one MatchSetting.
     * @example
     * // Delete one MatchSetting
     * const MatchSetting = await prisma.matchSetting.delete({
     *   where: {
     *     // ... filter to delete one MatchSetting
     *   }
     * })
     * 
     */
    delete<T extends MatchSettingDeleteArgs>(args: SelectSubset<T, MatchSettingDeleteArgs<ExtArgs>>): Prisma__MatchSettingClient<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MatchSetting.
     * @param {MatchSettingUpdateArgs} args - Arguments to update one MatchSetting.
     * @example
     * // Update one MatchSetting
     * const matchSetting = await prisma.matchSetting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MatchSettingUpdateArgs>(args: SelectSubset<T, MatchSettingUpdateArgs<ExtArgs>>): Prisma__MatchSettingClient<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MatchSettings.
     * @param {MatchSettingDeleteManyArgs} args - Arguments to filter MatchSettings to delete.
     * @example
     * // Delete a few MatchSettings
     * const { count } = await prisma.matchSetting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MatchSettingDeleteManyArgs>(args?: SelectSubset<T, MatchSettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MatchSettings
     * const matchSetting = await prisma.matchSetting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MatchSettingUpdateManyArgs>(args: SelectSubset<T, MatchSettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MatchSettings and returns the data updated in the database.
     * @param {MatchSettingUpdateManyAndReturnArgs} args - Arguments to update many MatchSettings.
     * @example
     * // Update many MatchSettings
     * const matchSetting = await prisma.matchSetting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MatchSettings and only return the `id`
     * const matchSettingWithIdOnly = await prisma.matchSetting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MatchSettingUpdateManyAndReturnArgs>(args: SelectSubset<T, MatchSettingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MatchSetting.
     * @param {MatchSettingUpsertArgs} args - Arguments to update or create a MatchSetting.
     * @example
     * // Update or create a MatchSetting
     * const matchSetting = await prisma.matchSetting.upsert({
     *   create: {
     *     // ... data to create a MatchSetting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MatchSetting we want to update
     *   }
     * })
     */
    upsert<T extends MatchSettingUpsertArgs>(args: SelectSubset<T, MatchSettingUpsertArgs<ExtArgs>>): Prisma__MatchSettingClient<$Result.GetResult<Prisma.$MatchSettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MatchSettings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSettingCountArgs} args - Arguments to filter MatchSettings to count.
     * @example
     * // Count the number of MatchSettings
     * const count = await prisma.matchSetting.count({
     *   where: {
     *     // ... the filter for the MatchSettings we want to count
     *   }
     * })
    **/
    count<T extends MatchSettingCountArgs>(
      args?: Subset<T, MatchSettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatchSettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MatchSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatchSettingAggregateArgs>(args: Subset<T, MatchSettingAggregateArgs>): Prisma.PrismaPromise<GetMatchSettingAggregateType<T>>

    /**
     * Group by MatchSetting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatchSettingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatchSettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatchSettingGroupByArgs['orderBy'] }
        : { orderBy?: MatchSettingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatchSettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatchSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MatchSetting model
   */
  readonly fields: MatchSettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MatchSetting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MatchSettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MatchSetting model
   */
  interface MatchSettingFieldRefs {
    readonly id: FieldRef<"MatchSetting", 'String'>
    readonly matchId: FieldRef<"MatchSetting", 'String'>
    readonly scoreLimit: FieldRef<"MatchSetting", 'Int'>
    readonly pauseTime: FieldRef<"MatchSetting", 'Int'>
    readonly allowPowerUps: FieldRef<"MatchSetting", 'Boolean'>
    readonly aiDifficulty: FieldRef<"MatchSetting", 'AIDifficulty'>
    readonly createdAt: FieldRef<"MatchSetting", 'DateTime'>
    readonly requiredCurrency: FieldRef<"MatchSetting", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MatchSetting findUnique
   */
  export type MatchSettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingInclude<ExtArgs> | null
    /**
     * Filter, which MatchSetting to fetch.
     */
    where: MatchSettingWhereUniqueInput
  }

  /**
   * MatchSetting findUniqueOrThrow
   */
  export type MatchSettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingInclude<ExtArgs> | null
    /**
     * Filter, which MatchSetting to fetch.
     */
    where: MatchSettingWhereUniqueInput
  }

  /**
   * MatchSetting findFirst
   */
  export type MatchSettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingInclude<ExtArgs> | null
    /**
     * Filter, which MatchSetting to fetch.
     */
    where?: MatchSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSettings to fetch.
     */
    orderBy?: MatchSettingOrderByWithRelationInput | MatchSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchSettings.
     */
    cursor?: MatchSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchSettings.
     */
    distinct?: MatchSettingScalarFieldEnum | MatchSettingScalarFieldEnum[]
  }

  /**
   * MatchSetting findFirstOrThrow
   */
  export type MatchSettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingInclude<ExtArgs> | null
    /**
     * Filter, which MatchSetting to fetch.
     */
    where?: MatchSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSettings to fetch.
     */
    orderBy?: MatchSettingOrderByWithRelationInput | MatchSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MatchSettings.
     */
    cursor?: MatchSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSettings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MatchSettings.
     */
    distinct?: MatchSettingScalarFieldEnum | MatchSettingScalarFieldEnum[]
  }

  /**
   * MatchSetting findMany
   */
  export type MatchSettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingInclude<ExtArgs> | null
    /**
     * Filter, which MatchSettings to fetch.
     */
    where?: MatchSettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MatchSettings to fetch.
     */
    orderBy?: MatchSettingOrderByWithRelationInput | MatchSettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MatchSettings.
     */
    cursor?: MatchSettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MatchSettings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MatchSettings.
     */
    skip?: number
    distinct?: MatchSettingScalarFieldEnum | MatchSettingScalarFieldEnum[]
  }

  /**
   * MatchSetting create
   */
  export type MatchSettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingInclude<ExtArgs> | null
    /**
     * The data needed to create a MatchSetting.
     */
    data: XOR<MatchSettingCreateInput, MatchSettingUncheckedCreateInput>
  }

  /**
   * MatchSetting createMany
   */
  export type MatchSettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MatchSettings.
     */
    data: MatchSettingCreateManyInput | MatchSettingCreateManyInput[]
  }

  /**
   * MatchSetting createManyAndReturn
   */
  export type MatchSettingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * The data used to create many MatchSettings.
     */
    data: MatchSettingCreateManyInput | MatchSettingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchSetting update
   */
  export type MatchSettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingInclude<ExtArgs> | null
    /**
     * The data needed to update a MatchSetting.
     */
    data: XOR<MatchSettingUpdateInput, MatchSettingUncheckedUpdateInput>
    /**
     * Choose, which MatchSetting to update.
     */
    where: MatchSettingWhereUniqueInput
  }

  /**
   * MatchSetting updateMany
   */
  export type MatchSettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MatchSettings.
     */
    data: XOR<MatchSettingUpdateManyMutationInput, MatchSettingUncheckedUpdateManyInput>
    /**
     * Filter which MatchSettings to update
     */
    where?: MatchSettingWhereInput
    /**
     * Limit how many MatchSettings to update.
     */
    limit?: number
  }

  /**
   * MatchSetting updateManyAndReturn
   */
  export type MatchSettingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * The data used to update MatchSettings.
     */
    data: XOR<MatchSettingUpdateManyMutationInput, MatchSettingUncheckedUpdateManyInput>
    /**
     * Filter which MatchSettings to update
     */
    where?: MatchSettingWhereInput
    /**
     * Limit how many MatchSettings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MatchSetting upsert
   */
  export type MatchSettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingInclude<ExtArgs> | null
    /**
     * The filter to search for the MatchSetting to update in case it exists.
     */
    where: MatchSettingWhereUniqueInput
    /**
     * In case the MatchSetting found by the `where` argument doesn't exist, create a new MatchSetting with this data.
     */
    create: XOR<MatchSettingCreateInput, MatchSettingUncheckedCreateInput>
    /**
     * In case the MatchSetting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MatchSettingUpdateInput, MatchSettingUncheckedUpdateInput>
  }

  /**
   * MatchSetting delete
   */
  export type MatchSettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingInclude<ExtArgs> | null
    /**
     * Filter which MatchSetting to delete.
     */
    where: MatchSettingWhereUniqueInput
  }

  /**
   * MatchSetting deleteMany
   */
  export type MatchSettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MatchSettings to delete
     */
    where?: MatchSettingWhereInput
    /**
     * Limit how many MatchSettings to delete.
     */
    limit?: number
  }

  /**
   * MatchSetting without action
   */
  export type MatchSettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSetting
     */
    select?: MatchSettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSetting
     */
    omit?: MatchSettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSettingInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    userId?: true
  }

  export type UserSumAggregateInputType = {
    userId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    userId: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    matchPlayers?: boolean | User$matchPlayersArgs<ExtArgs>
    matchSpectators?: boolean | User$matchSpectatorsArgs<ExtArgs>
    bets?: boolean | User$betsArgs<ExtArgs>
    invitationsSent?: boolean | User$invitationsSentArgs<ExtArgs>
    invitationsReceived?: boolean | User$invitationsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    matchPlayers?: boolean | User$matchPlayersArgs<ExtArgs>
    matchSpectators?: boolean | User$matchSpectatorsArgs<ExtArgs>
    bets?: boolean | User$betsArgs<ExtArgs>
    invitationsSent?: boolean | User$invitationsSentArgs<ExtArgs>
    invitationsReceived?: boolean | User$invitationsReceivedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      matchPlayers: Prisma.$MatchPlayerPayload<ExtArgs>[]
      matchSpectators: Prisma.$MatchSpectatorPayload<ExtArgs>[]
      bets: Prisma.$BetPayload<ExtArgs>[]
      invitationsSent: Prisma.$InvitationPayload<ExtArgs>[]
      invitationsReceived: Prisma.$InvitationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    matchPlayers<T extends User$matchPlayersArgs<ExtArgs> = {}>(args?: Subset<T, User$matchPlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    matchSpectators<T extends User$matchSpectatorsArgs<ExtArgs> = {}>(args?: Subset<T, User$matchSpectatorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MatchSpectatorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bets<T extends User$betsArgs<ExtArgs> = {}>(args?: Subset<T, User$betsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitationsSent<T extends User$invitationsSentArgs<ExtArgs> = {}>(args?: Subset<T, User$invitationsSentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitationsReceived<T extends User$invitationsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$invitationsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly userId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.matchPlayers
   */
  export type User$matchPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchPlayer
     */
    select?: MatchPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchPlayer
     */
    omit?: MatchPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchPlayerInclude<ExtArgs> | null
    where?: MatchPlayerWhereInput
    orderBy?: MatchPlayerOrderByWithRelationInput | MatchPlayerOrderByWithRelationInput[]
    cursor?: MatchPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchPlayerScalarFieldEnum | MatchPlayerScalarFieldEnum[]
  }

  /**
   * User.matchSpectators
   */
  export type User$matchSpectatorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MatchSpectator
     */
    select?: MatchSpectatorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MatchSpectator
     */
    omit?: MatchSpectatorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchSpectatorInclude<ExtArgs> | null
    where?: MatchSpectatorWhereInput
    orderBy?: MatchSpectatorOrderByWithRelationInput | MatchSpectatorOrderByWithRelationInput[]
    cursor?: MatchSpectatorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MatchSpectatorScalarFieldEnum | MatchSpectatorScalarFieldEnum[]
  }

  /**
   * User.bets
   */
  export type User$betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    where?: BetWhereInput
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    cursor?: BetWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * User.invitationsSent
   */
  export type User$invitationsSentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * User.invitationsReceived
   */
  export type User$invitationsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    cursor?: InvitationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Invitation
   */

  export type AggregateInvitation = {
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  export type InvitationAvgAggregateOutputType = {
    scoreLimit: number | null
    pauseTime: number | null
    requiredCurrency: number | null
  }

  export type InvitationSumAggregateOutputType = {
    scoreLimit: number | null
    pauseTime: number | null
    requiredCurrency: number | null
  }

  export type InvitationMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: $Enums.InvitationStatus | null
    type: $Enums.InvitationType | null
    createdAt: Date | null
    updatedAt: Date | null
    inviteCode: string | null
    expiresAt: Date | null
    scoreLimit: number | null
    pauseTime: number | null
    allowPowerUps: boolean | null
    requiredCurrency: number | null
    message: string | null
    matchId: string | null
  }

  export type InvitationMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    status: $Enums.InvitationStatus | null
    type: $Enums.InvitationType | null
    createdAt: Date | null
    updatedAt: Date | null
    inviteCode: string | null
    expiresAt: Date | null
    scoreLimit: number | null
    pauseTime: number | null
    allowPowerUps: boolean | null
    requiredCurrency: number | null
    message: string | null
    matchId: string | null
  }

  export type InvitationCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    status: number
    type: number
    createdAt: number
    updatedAt: number
    inviteCode: number
    expiresAt: number
    scoreLimit: number
    pauseTime: number
    allowPowerUps: number
    requiredCurrency: number
    message: number
    matchId: number
    _all: number
  }


  export type InvitationAvgAggregateInputType = {
    scoreLimit?: true
    pauseTime?: true
    requiredCurrency?: true
  }

  export type InvitationSumAggregateInputType = {
    scoreLimit?: true
    pauseTime?: true
    requiredCurrency?: true
  }

  export type InvitationMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    inviteCode?: true
    expiresAt?: true
    scoreLimit?: true
    pauseTime?: true
    allowPowerUps?: true
    requiredCurrency?: true
    message?: true
    matchId?: true
  }

  export type InvitationMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    inviteCode?: true
    expiresAt?: true
    scoreLimit?: true
    pauseTime?: true
    allowPowerUps?: true
    requiredCurrency?: true
    message?: true
    matchId?: true
  }

  export type InvitationCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    status?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    inviteCode?: true
    expiresAt?: true
    scoreLimit?: true
    pauseTime?: true
    allowPowerUps?: true
    requiredCurrency?: true
    message?: true
    matchId?: true
    _all?: true
  }

  export type InvitationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitation to aggregate.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invitations
    **/
    _count?: true | InvitationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InvitationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InvitationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InvitationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InvitationMaxAggregateInputType
  }

  export type GetInvitationAggregateType<T extends InvitationAggregateArgs> = {
        [P in keyof T & keyof AggregateInvitation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvitation[P]>
      : GetScalarType<T[P], AggregateInvitation[P]>
  }




  export type InvitationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InvitationWhereInput
    orderBy?: InvitationOrderByWithAggregationInput | InvitationOrderByWithAggregationInput[]
    by: InvitationScalarFieldEnum[] | InvitationScalarFieldEnum
    having?: InvitationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InvitationCountAggregateInputType | true
    _avg?: InvitationAvgAggregateInputType
    _sum?: InvitationSumAggregateInputType
    _min?: InvitationMinAggregateInputType
    _max?: InvitationMaxAggregateInputType
  }

  export type InvitationGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string | null
    status: $Enums.InvitationStatus
    type: $Enums.InvitationType
    createdAt: Date
    updatedAt: Date
    inviteCode: string
    expiresAt: Date | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency: number
    message: string | null
    matchId: string | null
    _count: InvitationCountAggregateOutputType | null
    _avg: InvitationAvgAggregateOutputType | null
    _sum: InvitationSumAggregateOutputType | null
    _min: InvitationMinAggregateOutputType | null
    _max: InvitationMaxAggregateOutputType | null
  }

  type GetInvitationGroupByPayload<T extends InvitationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvitationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InvitationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InvitationGroupByOutputType[P]>
            : GetScalarType<T[P], InvitationGroupByOutputType[P]>
        }
      >
    >


  export type InvitationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inviteCode?: boolean
    expiresAt?: boolean
    scoreLimit?: boolean
    pauseTime?: boolean
    allowPowerUps?: boolean
    requiredCurrency?: boolean
    message?: boolean
    matchId?: boolean
    match?: boolean | Invitation$matchArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | Invitation$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inviteCode?: boolean
    expiresAt?: boolean
    scoreLimit?: boolean
    pauseTime?: boolean
    allowPowerUps?: boolean
    requiredCurrency?: boolean
    message?: boolean
    matchId?: boolean
    match?: boolean | Invitation$matchArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | Invitation$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inviteCode?: boolean
    expiresAt?: boolean
    scoreLimit?: boolean
    pauseTime?: boolean
    allowPowerUps?: boolean
    requiredCurrency?: boolean
    message?: boolean
    matchId?: boolean
    match?: boolean | Invitation$matchArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | Invitation$receiverArgs<ExtArgs>
  }, ExtArgs["result"]["invitation"]>

  export type InvitationSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    status?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    inviteCode?: boolean
    expiresAt?: boolean
    scoreLimit?: boolean
    pauseTime?: boolean
    allowPowerUps?: boolean
    requiredCurrency?: boolean
    message?: boolean
    matchId?: boolean
  }

  export type InvitationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "status" | "type" | "createdAt" | "updatedAt" | "inviteCode" | "expiresAt" | "scoreLimit" | "pauseTime" | "allowPowerUps" | "requiredCurrency" | "message" | "matchId", ExtArgs["result"]["invitation"]>
  export type InvitationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | Invitation$matchArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | Invitation$receiverArgs<ExtArgs>
  }
  export type InvitationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | Invitation$matchArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | Invitation$receiverArgs<ExtArgs>
  }
  export type InvitationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    match?: boolean | Invitation$matchArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | Invitation$receiverArgs<ExtArgs>
  }

  export type $InvitationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invitation"
    objects: {
      match: Prisma.$MatchPayload<ExtArgs> | null
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string | null
      status: $Enums.InvitationStatus
      type: $Enums.InvitationType
      createdAt: Date
      updatedAt: Date
      inviteCode: string
      expiresAt: Date | null
      scoreLimit: number
      pauseTime: number
      allowPowerUps: boolean
      requiredCurrency: number
      message: string | null
      matchId: string | null
    }, ExtArgs["result"]["invitation"]>
    composites: {}
  }

  type InvitationGetPayload<S extends boolean | null | undefined | InvitationDefaultArgs> = $Result.GetResult<Prisma.$InvitationPayload, S>

  type InvitationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InvitationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InvitationCountAggregateInputType | true
    }

  export interface InvitationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invitation'], meta: { name: 'Invitation' } }
    /**
     * Find zero or one Invitation that matches the filter.
     * @param {InvitationFindUniqueArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InvitationFindUniqueArgs>(args: SelectSubset<T, InvitationFindUniqueArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invitation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InvitationFindUniqueOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InvitationFindUniqueOrThrowArgs>(args: SelectSubset<T, InvitationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InvitationFindFirstArgs>(args?: SelectSubset<T, InvitationFindFirstArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invitation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindFirstOrThrowArgs} args - Arguments to find a Invitation
     * @example
     * // Get one Invitation
     * const invitation = await prisma.invitation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InvitationFindFirstOrThrowArgs>(args?: SelectSubset<T, InvitationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invitations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invitations
     * const invitations = await prisma.invitation.findMany()
     * 
     * // Get first 10 Invitations
     * const invitations = await prisma.invitation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const invitationWithIdOnly = await prisma.invitation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InvitationFindManyArgs>(args?: SelectSubset<T, InvitationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invitation.
     * @param {InvitationCreateArgs} args - Arguments to create a Invitation.
     * @example
     * // Create one Invitation
     * const Invitation = await prisma.invitation.create({
     *   data: {
     *     // ... data to create a Invitation
     *   }
     * })
     * 
     */
    create<T extends InvitationCreateArgs>(args: SelectSubset<T, InvitationCreateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invitations.
     * @param {InvitationCreateManyArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InvitationCreateManyArgs>(args?: SelectSubset<T, InvitationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invitations and returns the data saved in the database.
     * @param {InvitationCreateManyAndReturnArgs} args - Arguments to create many Invitations.
     * @example
     * // Create many Invitations
     * const invitation = await prisma.invitation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InvitationCreateManyAndReturnArgs>(args?: SelectSubset<T, InvitationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invitation.
     * @param {InvitationDeleteArgs} args - Arguments to delete one Invitation.
     * @example
     * // Delete one Invitation
     * const Invitation = await prisma.invitation.delete({
     *   where: {
     *     // ... filter to delete one Invitation
     *   }
     * })
     * 
     */
    delete<T extends InvitationDeleteArgs>(args: SelectSubset<T, InvitationDeleteArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invitation.
     * @param {InvitationUpdateArgs} args - Arguments to update one Invitation.
     * @example
     * // Update one Invitation
     * const invitation = await prisma.invitation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InvitationUpdateArgs>(args: SelectSubset<T, InvitationUpdateArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invitations.
     * @param {InvitationDeleteManyArgs} args - Arguments to filter Invitations to delete.
     * @example
     * // Delete a few Invitations
     * const { count } = await prisma.invitation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InvitationDeleteManyArgs>(args?: SelectSubset<T, InvitationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InvitationUpdateManyArgs>(args: SelectSubset<T, InvitationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invitations and returns the data updated in the database.
     * @param {InvitationUpdateManyAndReturnArgs} args - Arguments to update many Invitations.
     * @example
     * // Update many Invitations
     * const invitation = await prisma.invitation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invitations and only return the `id`
     * const invitationWithIdOnly = await prisma.invitation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InvitationUpdateManyAndReturnArgs>(args: SelectSubset<T, InvitationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invitation.
     * @param {InvitationUpsertArgs} args - Arguments to update or create a Invitation.
     * @example
     * // Update or create a Invitation
     * const invitation = await prisma.invitation.upsert({
     *   create: {
     *     // ... data to create a Invitation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invitation we want to update
     *   }
     * })
     */
    upsert<T extends InvitationUpsertArgs>(args: SelectSubset<T, InvitationUpsertArgs<ExtArgs>>): Prisma__InvitationClient<$Result.GetResult<Prisma.$InvitationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invitations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationCountArgs} args - Arguments to filter Invitations to count.
     * @example
     * // Count the number of Invitations
     * const count = await prisma.invitation.count({
     *   where: {
     *     // ... the filter for the Invitations we want to count
     *   }
     * })
    **/
    count<T extends InvitationCountArgs>(
      args?: Subset<T, InvitationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvitationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InvitationAggregateArgs>(args: Subset<T, InvitationAggregateArgs>): Prisma.PrismaPromise<GetInvitationAggregateType<T>>

    /**
     * Group by Invitation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvitationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InvitationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InvitationGroupByArgs['orderBy'] }
        : { orderBy?: InvitationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InvitationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvitationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invitation model
   */
  readonly fields: InvitationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invitation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InvitationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    match<T extends Invitation$matchArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$matchArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends Invitation$receiverArgs<ExtArgs> = {}>(args?: Subset<T, Invitation$receiverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invitation model
   */
  interface InvitationFieldRefs {
    readonly id: FieldRef<"Invitation", 'String'>
    readonly senderId: FieldRef<"Invitation", 'String'>
    readonly receiverId: FieldRef<"Invitation", 'String'>
    readonly status: FieldRef<"Invitation", 'InvitationStatus'>
    readonly type: FieldRef<"Invitation", 'InvitationType'>
    readonly createdAt: FieldRef<"Invitation", 'DateTime'>
    readonly updatedAt: FieldRef<"Invitation", 'DateTime'>
    readonly inviteCode: FieldRef<"Invitation", 'String'>
    readonly expiresAt: FieldRef<"Invitation", 'DateTime'>
    readonly scoreLimit: FieldRef<"Invitation", 'Int'>
    readonly pauseTime: FieldRef<"Invitation", 'Int'>
    readonly allowPowerUps: FieldRef<"Invitation", 'Boolean'>
    readonly requiredCurrency: FieldRef<"Invitation", 'Int'>
    readonly message: FieldRef<"Invitation", 'String'>
    readonly matchId: FieldRef<"Invitation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Invitation findUnique
   */
  export type InvitationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findUniqueOrThrow
   */
  export type InvitationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation findFirst
   */
  export type InvitationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findFirstOrThrow
   */
  export type InvitationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitation to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invitations.
     */
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation findMany
   */
  export type InvitationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter, which Invitations to fetch.
     */
    where?: InvitationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invitations to fetch.
     */
    orderBy?: InvitationOrderByWithRelationInput | InvitationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invitations.
     */
    cursor?: InvitationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invitations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invitations.
     */
    skip?: number
    distinct?: InvitationScalarFieldEnum | InvitationScalarFieldEnum[]
  }

  /**
   * Invitation create
   */
  export type InvitationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to create a Invitation.
     */
    data: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
  }

  /**
   * Invitation createMany
   */
  export type InvitationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
  }

  /**
   * Invitation createManyAndReturn
   */
  export type InvitationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to create many Invitations.
     */
    data: InvitationCreateManyInput | InvitationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation update
   */
  export type InvitationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The data needed to update a Invitation.
     */
    data: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
    /**
     * Choose, which Invitation to update.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation updateMany
   */
  export type InvitationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
  }

  /**
   * Invitation updateManyAndReturn
   */
  export type InvitationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * The data used to update Invitations.
     */
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyInput>
    /**
     * Filter which Invitations to update
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invitation upsert
   */
  export type InvitationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * The filter to search for the Invitation to update in case it exists.
     */
    where: InvitationWhereUniqueInput
    /**
     * In case the Invitation found by the `where` argument doesn't exist, create a new Invitation with this data.
     */
    create: XOR<InvitationCreateInput, InvitationUncheckedCreateInput>
    /**
     * In case the Invitation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InvitationUpdateInput, InvitationUncheckedUpdateInput>
  }

  /**
   * Invitation delete
   */
  export type InvitationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
    /**
     * Filter which Invitation to delete.
     */
    where: InvitationWhereUniqueInput
  }

  /**
   * Invitation deleteMany
   */
  export type InvitationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invitations to delete
     */
    where?: InvitationWhereInput
    /**
     * Limit how many Invitations to delete.
     */
    limit?: number
  }

  /**
   * Invitation.match
   */
  export type Invitation$matchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Match
     */
    select?: MatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Match
     */
    omit?: MatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MatchInclude<ExtArgs> | null
    where?: MatchWhereInput
  }

  /**
   * Invitation.receiver
   */
  export type Invitation$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Invitation without action
   */
  export type InvitationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invitation
     */
    select?: InvitationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invitation
     */
    omit?: InvitationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InvitationInclude<ExtArgs> | null
  }


  /**
   * Model Bet
   */

  export type AggregateBet = {
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  export type BetAvgAggregateOutputType = {
    amount: number | null
  }

  export type BetSumAggregateOutputType = {
    amount: number | null
  }

  export type BetMinAggregateOutputType = {
    id: string | null
    amount: number | null
    predictedWinnerId: string | null
    status: $Enums.BetStatus | null
    createdAt: Date | null
    resolvedAt: Date | null
    userId: string | null
    matchId: string | null
  }

  export type BetMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    predictedWinnerId: string | null
    status: $Enums.BetStatus | null
    createdAt: Date | null
    resolvedAt: Date | null
    userId: string | null
    matchId: string | null
  }

  export type BetCountAggregateOutputType = {
    id: number
    amount: number
    predictedWinnerId: number
    status: number
    createdAt: number
    resolvedAt: number
    userId: number
    matchId: number
    _all: number
  }


  export type BetAvgAggregateInputType = {
    amount?: true
  }

  export type BetSumAggregateInputType = {
    amount?: true
  }

  export type BetMinAggregateInputType = {
    id?: true
    amount?: true
    predictedWinnerId?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    userId?: true
    matchId?: true
  }

  export type BetMaxAggregateInputType = {
    id?: true
    amount?: true
    predictedWinnerId?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    userId?: true
    matchId?: true
  }

  export type BetCountAggregateInputType = {
    id?: true
    amount?: true
    predictedWinnerId?: true
    status?: true
    createdAt?: true
    resolvedAt?: true
    userId?: true
    matchId?: true
    _all?: true
  }

  export type BetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bet to aggregate.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bets
    **/
    _count?: true | BetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetMaxAggregateInputType
  }

  export type GetBetAggregateType<T extends BetAggregateArgs> = {
        [P in keyof T & keyof AggregateBet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBet[P]>
      : GetScalarType<T[P], AggregateBet[P]>
  }




  export type BetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
    orderBy?: BetOrderByWithAggregationInput | BetOrderByWithAggregationInput[]
    by: BetScalarFieldEnum[] | BetScalarFieldEnum
    having?: BetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetCountAggregateInputType | true
    _avg?: BetAvgAggregateInputType
    _sum?: BetSumAggregateInputType
    _min?: BetMinAggregateInputType
    _max?: BetMaxAggregateInputType
  }

  export type BetGroupByOutputType = {
    id: string
    amount: number
    predictedWinnerId: string | null
    status: $Enums.BetStatus
    createdAt: Date
    resolvedAt: Date | null
    userId: string
    matchId: string
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  type GetBetGroupByPayload<T extends BetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetGroupByOutputType[P]>
            : GetScalarType<T[P], BetGroupByOutputType[P]>
        }
      >
    >


  export type BetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    predictedWinnerId?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    userId?: boolean
    matchId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    predictedWinnerId?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    userId?: boolean
    matchId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    predictedWinnerId?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    userId?: boolean
    matchId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bet"]>

  export type BetSelectScalar = {
    id?: boolean
    amount?: boolean
    predictedWinnerId?: boolean
    status?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    userId?: boolean
    matchId?: boolean
  }

  export type BetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "predictedWinnerId" | "status" | "createdAt" | "resolvedAt" | "userId" | "matchId", ExtArgs["result"]["bet"]>
  export type BetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }
  export type BetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }
  export type BetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    match?: boolean | MatchDefaultArgs<ExtArgs>
  }

  export type $BetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      match: Prisma.$MatchPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      predictedWinnerId: string | null
      status: $Enums.BetStatus
      createdAt: Date
      resolvedAt: Date | null
      userId: string
      matchId: string
    }, ExtArgs["result"]["bet"]>
    composites: {}
  }

  type BetGetPayload<S extends boolean | null | undefined | BetDefaultArgs> = $Result.GetResult<Prisma.$BetPayload, S>

  type BetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetCountAggregateInputType | true
    }

  export interface BetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bet'], meta: { name: 'Bet' } }
    /**
     * Find zero or one Bet that matches the filter.
     * @param {BetFindUniqueArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetFindUniqueArgs>(args: SelectSubset<T, BetFindUniqueArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BetFindUniqueOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetFindUniqueOrThrowArgs>(args: SelectSubset<T, BetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetFindFirstArgs>(args?: SelectSubset<T, BetFindFirstArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetFindFirstOrThrowArgs>(args?: SelectSubset<T, BetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bets
     * const bets = await prisma.bet.findMany()
     * 
     * // Get first 10 Bets
     * const bets = await prisma.bet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betWithIdOnly = await prisma.bet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetFindManyArgs>(args?: SelectSubset<T, BetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bet.
     * @param {BetCreateArgs} args - Arguments to create a Bet.
     * @example
     * // Create one Bet
     * const Bet = await prisma.bet.create({
     *   data: {
     *     // ... data to create a Bet
     *   }
     * })
     * 
     */
    create<T extends BetCreateArgs>(args: SelectSubset<T, BetCreateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bets.
     * @param {BetCreateManyArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetCreateManyArgs>(args?: SelectSubset<T, BetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bets and returns the data saved in the database.
     * @param {BetCreateManyAndReturnArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bets and only return the `id`
     * const betWithIdOnly = await prisma.bet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BetCreateManyAndReturnArgs>(args?: SelectSubset<T, BetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bet.
     * @param {BetDeleteArgs} args - Arguments to delete one Bet.
     * @example
     * // Delete one Bet
     * const Bet = await prisma.bet.delete({
     *   where: {
     *     // ... filter to delete one Bet
     *   }
     * })
     * 
     */
    delete<T extends BetDeleteArgs>(args: SelectSubset<T, BetDeleteArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bet.
     * @param {BetUpdateArgs} args - Arguments to update one Bet.
     * @example
     * // Update one Bet
     * const bet = await prisma.bet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetUpdateArgs>(args: SelectSubset<T, BetUpdateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bets.
     * @param {BetDeleteManyArgs} args - Arguments to filter Bets to delete.
     * @example
     * // Delete a few Bets
     * const { count } = await prisma.bet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetDeleteManyArgs>(args?: SelectSubset<T, BetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bets
     * const bet = await prisma.bet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetUpdateManyArgs>(args: SelectSubset<T, BetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets and returns the data updated in the database.
     * @param {BetUpdateManyAndReturnArgs} args - Arguments to update many Bets.
     * @example
     * // Update many Bets
     * const bet = await prisma.bet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bets and only return the `id`
     * const betWithIdOnly = await prisma.bet.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BetUpdateManyAndReturnArgs>(args: SelectSubset<T, BetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bet.
     * @param {BetUpsertArgs} args - Arguments to update or create a Bet.
     * @example
     * // Update or create a Bet
     * const bet = await prisma.bet.upsert({
     *   create: {
     *     // ... data to create a Bet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bet we want to update
     *   }
     * })
     */
    upsert<T extends BetUpsertArgs>(args: SelectSubset<T, BetUpsertArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetCountArgs} args - Arguments to filter Bets to count.
     * @example
     * // Count the number of Bets
     * const count = await prisma.bet.count({
     *   where: {
     *     // ... the filter for the Bets we want to count
     *   }
     * })
    **/
    count<T extends BetCountArgs>(
      args?: Subset<T, BetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BetAggregateArgs>(args: Subset<T, BetAggregateArgs>): Prisma.PrismaPromise<GetBetAggregateType<T>>

    /**
     * Group by Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetGroupByArgs['orderBy'] }
        : { orderBy?: BetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bet model
   */
  readonly fields: BetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    match<T extends MatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MatchDefaultArgs<ExtArgs>>): Prisma__MatchClient<$Result.GetResult<Prisma.$MatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bet model
   */
  interface BetFieldRefs {
    readonly id: FieldRef<"Bet", 'String'>
    readonly amount: FieldRef<"Bet", 'Int'>
    readonly predictedWinnerId: FieldRef<"Bet", 'String'>
    readonly status: FieldRef<"Bet", 'BetStatus'>
    readonly createdAt: FieldRef<"Bet", 'DateTime'>
    readonly resolvedAt: FieldRef<"Bet", 'DateTime'>
    readonly userId: FieldRef<"Bet", 'String'>
    readonly matchId: FieldRef<"Bet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Bet findUnique
   */
  export type BetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findUniqueOrThrow
   */
  export type BetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findFirst
   */
  export type BetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findFirstOrThrow
   */
  export type BetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findMany
   */
  export type BetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter, which Bets to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet create
   */
  export type BetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to create a Bet.
     */
    data: XOR<BetCreateInput, BetUncheckedCreateInput>
  }

  /**
   * Bet createMany
   */
  export type BetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
  }

  /**
   * Bet createManyAndReturn
   */
  export type BetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bet update
   */
  export type BetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The data needed to update a Bet.
     */
    data: XOR<BetUpdateInput, BetUncheckedUpdateInput>
    /**
     * Choose, which Bet to update.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet updateMany
   */
  export type BetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bets.
     */
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyInput>
    /**
     * Filter which Bets to update
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to update.
     */
    limit?: number
  }

  /**
   * Bet updateManyAndReturn
   */
  export type BetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The data used to update Bets.
     */
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyInput>
    /**
     * Filter which Bets to update
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bet upsert
   */
  export type BetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * The filter to search for the Bet to update in case it exists.
     */
    where: BetWhereUniqueInput
    /**
     * In case the Bet found by the `where` argument doesn't exist, create a new Bet with this data.
     */
    create: XOR<BetCreateInput, BetUncheckedCreateInput>
    /**
     * In case the Bet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetUpdateInput, BetUncheckedUpdateInput>
  }

  /**
   * Bet delete
   */
  export type BetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
    /**
     * Filter which Bet to delete.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet deleteMany
   */
  export type BetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bets to delete
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to delete.
     */
    limit?: number
  }

  /**
   * Bet without action
   */
  export type BetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BetInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MatchSpectatorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    username: 'username',
    matchId: 'matchId'
  };

  export type MatchSpectatorScalarFieldEnum = (typeof MatchSpectatorScalarFieldEnum)[keyof typeof MatchSpectatorScalarFieldEnum]


  export const MatchPlayerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    username: 'username',
    avatarUrl: 'avatarUrl',
    isAI: 'isAI',
    finalScore: 'finalScore',
    isReady: 'isReady',
    isHost: 'isHost',
    characterId: 'characterId',
    paddleId: 'paddleId',
    rankTier: 'rankTier',
    rankDivision: 'rankDivision',
    rankChange: 'rankChange'
  };

  export type MatchPlayerScalarFieldEnum = (typeof MatchPlayerScalarFieldEnum)[keyof typeof MatchPlayerScalarFieldEnum]


  export const MatchScalarFieldEnum: {
    id: 'id',
    mode: 'mode',
    status: 'status',
    duration: 'duration',
    createdAt: 'createdAt',
    confirmedAt: 'confirmedAt',
    winnerId: 'winnerId',
    opponent1Id: 'opponent1Id',
    opponent2Id: 'opponent2Id'
  };

  export type MatchScalarFieldEnum = (typeof MatchScalarFieldEnum)[keyof typeof MatchScalarFieldEnum]


  export const MatchSettingScalarFieldEnum: {
    id: 'id',
    matchId: 'matchId',
    scoreLimit: 'scoreLimit',
    pauseTime: 'pauseTime',
    allowPowerUps: 'allowPowerUps',
    aiDifficulty: 'aiDifficulty',
    createdAt: 'createdAt',
    requiredCurrency: 'requiredCurrency'
  };

  export type MatchSettingScalarFieldEnum = (typeof MatchSettingScalarFieldEnum)[keyof typeof MatchSettingScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const InvitationScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    status: 'status',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    inviteCode: 'inviteCode',
    expiresAt: 'expiresAt',
    scoreLimit: 'scoreLimit',
    pauseTime: 'pauseTime',
    allowPowerUps: 'allowPowerUps',
    requiredCurrency: 'requiredCurrency',
    message: 'message',
    matchId: 'matchId'
  };

  export type InvitationScalarFieldEnum = (typeof InvitationScalarFieldEnum)[keyof typeof InvitationScalarFieldEnum]


  export const BetScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    predictedWinnerId: 'predictedWinnerId',
    status: 'status',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt',
    userId: 'userId',
    matchId: 'matchId'
  };

  export type BetScalarFieldEnum = (typeof BetScalarFieldEnum)[keyof typeof BetScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'GameMode'
   */
  export type EnumGameModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameMode'>
    


  /**
   * Reference to a field of type 'GameStatus'
   */
  export type EnumGameStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GameStatus'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AIDifficulty'
   */
  export type EnumAIDifficultyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AIDifficulty'>
    


  /**
   * Reference to a field of type 'InvitationStatus'
   */
  export type EnumInvitationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationStatus'>
    


  /**
   * Reference to a field of type 'InvitationType'
   */
  export type EnumInvitationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvitationType'>
    


  /**
   * Reference to a field of type 'BetStatus'
   */
  export type EnumBetStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BetStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type MatchSpectatorWhereInput = {
    AND?: MatchSpectatorWhereInput | MatchSpectatorWhereInput[]
    OR?: MatchSpectatorWhereInput[]
    NOT?: MatchSpectatorWhereInput | MatchSpectatorWhereInput[]
    id?: StringFilter<"MatchSpectator"> | string
    userId?: StringFilter<"MatchSpectator"> | string
    username?: StringFilter<"MatchSpectator"> | string
    matchId?: StringFilter<"MatchSpectator"> | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MatchSpectatorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    matchId?: SortOrder
    match?: MatchOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MatchSpectatorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchSpectatorWhereInput | MatchSpectatorWhereInput[]
    OR?: MatchSpectatorWhereInput[]
    NOT?: MatchSpectatorWhereInput | MatchSpectatorWhereInput[]
    userId?: StringFilter<"MatchSpectator"> | string
    username?: StringFilter<"MatchSpectator"> | string
    matchId?: StringFilter<"MatchSpectator"> | string
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MatchSpectatorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    matchId?: SortOrder
    _count?: MatchSpectatorCountOrderByAggregateInput
    _max?: MatchSpectatorMaxOrderByAggregateInput
    _min?: MatchSpectatorMinOrderByAggregateInput
  }

  export type MatchSpectatorScalarWhereWithAggregatesInput = {
    AND?: MatchSpectatorScalarWhereWithAggregatesInput | MatchSpectatorScalarWhereWithAggregatesInput[]
    OR?: MatchSpectatorScalarWhereWithAggregatesInput[]
    NOT?: MatchSpectatorScalarWhereWithAggregatesInput | MatchSpectatorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchSpectator"> | string
    userId?: StringWithAggregatesFilter<"MatchSpectator"> | string
    username?: StringWithAggregatesFilter<"MatchSpectator"> | string
    matchId?: StringWithAggregatesFilter<"MatchSpectator"> | string
  }

  export type MatchPlayerWhereInput = {
    AND?: MatchPlayerWhereInput | MatchPlayerWhereInput[]
    OR?: MatchPlayerWhereInput[]
    NOT?: MatchPlayerWhereInput | MatchPlayerWhereInput[]
    id?: StringFilter<"MatchPlayer"> | string
    userId?: StringNullableFilter<"MatchPlayer"> | string | null
    username?: StringFilter<"MatchPlayer"> | string
    avatarUrl?: StringNullableFilter<"MatchPlayer"> | string | null
    isAI?: BoolFilter<"MatchPlayer"> | boolean
    finalScore?: IntFilter<"MatchPlayer"> | number
    isReady?: BoolFilter<"MatchPlayer"> | boolean
    isHost?: BoolFilter<"MatchPlayer"> | boolean
    characterId?: StringFilter<"MatchPlayer"> | string
    paddleId?: StringFilter<"MatchPlayer"> | string
    rankTier?: StringFilter<"MatchPlayer"> | string
    rankDivision?: StringFilter<"MatchPlayer"> | string
    rankChange?: IntNullableFilter<"MatchPlayer"> | number | null
    matchAsOpponent1?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    matchAsOpponent2?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type MatchPlayerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    username?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isAI?: SortOrder
    finalScore?: SortOrder
    isReady?: SortOrder
    isHost?: SortOrder
    characterId?: SortOrder
    paddleId?: SortOrder
    rankTier?: SortOrder
    rankDivision?: SortOrder
    rankChange?: SortOrderInput | SortOrder
    matchAsOpponent1?: MatchOrderByWithRelationInput
    matchAsOpponent2?: MatchOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type MatchPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MatchPlayerWhereInput | MatchPlayerWhereInput[]
    OR?: MatchPlayerWhereInput[]
    NOT?: MatchPlayerWhereInput | MatchPlayerWhereInput[]
    userId?: StringNullableFilter<"MatchPlayer"> | string | null
    username?: StringFilter<"MatchPlayer"> | string
    avatarUrl?: StringNullableFilter<"MatchPlayer"> | string | null
    isAI?: BoolFilter<"MatchPlayer"> | boolean
    finalScore?: IntFilter<"MatchPlayer"> | number
    isReady?: BoolFilter<"MatchPlayer"> | boolean
    isHost?: BoolFilter<"MatchPlayer"> | boolean
    characterId?: StringFilter<"MatchPlayer"> | string
    paddleId?: StringFilter<"MatchPlayer"> | string
    rankTier?: StringFilter<"MatchPlayer"> | string
    rankDivision?: StringFilter<"MatchPlayer"> | string
    rankChange?: IntNullableFilter<"MatchPlayer"> | number | null
    matchAsOpponent1?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    matchAsOpponent2?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type MatchPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    username?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isAI?: SortOrder
    finalScore?: SortOrder
    isReady?: SortOrder
    isHost?: SortOrder
    characterId?: SortOrder
    paddleId?: SortOrder
    rankTier?: SortOrder
    rankDivision?: SortOrder
    rankChange?: SortOrderInput | SortOrder
    _count?: MatchPlayerCountOrderByAggregateInput
    _avg?: MatchPlayerAvgOrderByAggregateInput
    _max?: MatchPlayerMaxOrderByAggregateInput
    _min?: MatchPlayerMinOrderByAggregateInput
    _sum?: MatchPlayerSumOrderByAggregateInput
  }

  export type MatchPlayerScalarWhereWithAggregatesInput = {
    AND?: MatchPlayerScalarWhereWithAggregatesInput | MatchPlayerScalarWhereWithAggregatesInput[]
    OR?: MatchPlayerScalarWhereWithAggregatesInput[]
    NOT?: MatchPlayerScalarWhereWithAggregatesInput | MatchPlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchPlayer"> | string
    userId?: StringNullableWithAggregatesFilter<"MatchPlayer"> | string | null
    username?: StringWithAggregatesFilter<"MatchPlayer"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"MatchPlayer"> | string | null
    isAI?: BoolWithAggregatesFilter<"MatchPlayer"> | boolean
    finalScore?: IntWithAggregatesFilter<"MatchPlayer"> | number
    isReady?: BoolWithAggregatesFilter<"MatchPlayer"> | boolean
    isHost?: BoolWithAggregatesFilter<"MatchPlayer"> | boolean
    characterId?: StringWithAggregatesFilter<"MatchPlayer"> | string
    paddleId?: StringWithAggregatesFilter<"MatchPlayer"> | string
    rankTier?: StringWithAggregatesFilter<"MatchPlayer"> | string
    rankDivision?: StringWithAggregatesFilter<"MatchPlayer"> | string
    rankChange?: IntNullableWithAggregatesFilter<"MatchPlayer"> | number | null
  }

  export type MatchWhereInput = {
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    id?: StringFilter<"Match"> | string
    mode?: EnumGameModeFilter<"Match"> | $Enums.GameMode
    status?: EnumGameStatusFilter<"Match"> | $Enums.GameStatus
    duration?: IntFilter<"Match"> | number
    createdAt?: DateTimeFilter<"Match"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    winnerId?: StringNullableFilter<"Match"> | string | null
    opponent1Id?: StringFilter<"Match"> | string
    opponent2Id?: StringNullableFilter<"Match"> | string | null
    opponent1?: XOR<MatchPlayerScalarRelationFilter, MatchPlayerWhereInput>
    opponent2?: XOR<MatchPlayerNullableScalarRelationFilter, MatchPlayerWhereInput> | null
    spectators?: MatchSpectatorListRelationFilter
    bets?: BetListRelationFilter
    matchSetting?: XOR<MatchSettingNullableScalarRelationFilter, MatchSettingWhereInput> | null
    invitation?: XOR<InvitationNullableScalarRelationFilter, InvitationWhereInput> | null
  }

  export type MatchOrderByWithRelationInput = {
    id?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    opponent1Id?: SortOrder
    opponent2Id?: SortOrderInput | SortOrder
    opponent1?: MatchPlayerOrderByWithRelationInput
    opponent2?: MatchPlayerOrderByWithRelationInput
    spectators?: MatchSpectatorOrderByRelationAggregateInput
    bets?: BetOrderByRelationAggregateInput
    matchSetting?: MatchSettingOrderByWithRelationInput
    invitation?: InvitationOrderByWithRelationInput
  }

  export type MatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    opponent1Id?: string
    opponent2Id?: string
    AND?: MatchWhereInput | MatchWhereInput[]
    OR?: MatchWhereInput[]
    NOT?: MatchWhereInput | MatchWhereInput[]
    mode?: EnumGameModeFilter<"Match"> | $Enums.GameMode
    status?: EnumGameStatusFilter<"Match"> | $Enums.GameStatus
    duration?: IntFilter<"Match"> | number
    createdAt?: DateTimeFilter<"Match"> | Date | string
    confirmedAt?: DateTimeNullableFilter<"Match"> | Date | string | null
    winnerId?: StringNullableFilter<"Match"> | string | null
    opponent1?: XOR<MatchPlayerScalarRelationFilter, MatchPlayerWhereInput>
    opponent2?: XOR<MatchPlayerNullableScalarRelationFilter, MatchPlayerWhereInput> | null
    spectators?: MatchSpectatorListRelationFilter
    bets?: BetListRelationFilter
    matchSetting?: XOR<MatchSettingNullableScalarRelationFilter, MatchSettingWhereInput> | null
    invitation?: XOR<InvitationNullableScalarRelationFilter, InvitationWhereInput> | null
  }, "id" | "opponent1Id" | "opponent2Id">

  export type MatchOrderByWithAggregationInput = {
    id?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    winnerId?: SortOrderInput | SortOrder
    opponent1Id?: SortOrder
    opponent2Id?: SortOrderInput | SortOrder
    _count?: MatchCountOrderByAggregateInput
    _avg?: MatchAvgOrderByAggregateInput
    _max?: MatchMaxOrderByAggregateInput
    _min?: MatchMinOrderByAggregateInput
    _sum?: MatchSumOrderByAggregateInput
  }

  export type MatchScalarWhereWithAggregatesInput = {
    AND?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    OR?: MatchScalarWhereWithAggregatesInput[]
    NOT?: MatchScalarWhereWithAggregatesInput | MatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Match"> | string
    mode?: EnumGameModeWithAggregatesFilter<"Match"> | $Enums.GameMode
    status?: EnumGameStatusWithAggregatesFilter<"Match"> | $Enums.GameStatus
    duration?: IntWithAggregatesFilter<"Match"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Match"> | Date | string
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"Match"> | Date | string | null
    winnerId?: StringNullableWithAggregatesFilter<"Match"> | string | null
    opponent1Id?: StringWithAggregatesFilter<"Match"> | string
    opponent2Id?: StringNullableWithAggregatesFilter<"Match"> | string | null
  }

  export type MatchSettingWhereInput = {
    AND?: MatchSettingWhereInput | MatchSettingWhereInput[]
    OR?: MatchSettingWhereInput[]
    NOT?: MatchSettingWhereInput | MatchSettingWhereInput[]
    id?: StringFilter<"MatchSetting"> | string
    matchId?: StringFilter<"MatchSetting"> | string
    scoreLimit?: IntFilter<"MatchSetting"> | number
    pauseTime?: IntFilter<"MatchSetting"> | number
    allowPowerUps?: BoolFilter<"MatchSetting"> | boolean
    aiDifficulty?: EnumAIDifficultyNullableFilter<"MatchSetting"> | $Enums.AIDifficulty | null
    createdAt?: DateTimeFilter<"MatchSetting"> | Date | string
    requiredCurrency?: IntFilter<"MatchSetting"> | number
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
  }

  export type MatchSettingOrderByWithRelationInput = {
    id?: SortOrder
    matchId?: SortOrder
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    allowPowerUps?: SortOrder
    aiDifficulty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    requiredCurrency?: SortOrder
    match?: MatchOrderByWithRelationInput
  }

  export type MatchSettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    matchId?: string
    AND?: MatchSettingWhereInput | MatchSettingWhereInput[]
    OR?: MatchSettingWhereInput[]
    NOT?: MatchSettingWhereInput | MatchSettingWhereInput[]
    scoreLimit?: IntFilter<"MatchSetting"> | number
    pauseTime?: IntFilter<"MatchSetting"> | number
    allowPowerUps?: BoolFilter<"MatchSetting"> | boolean
    aiDifficulty?: EnumAIDifficultyNullableFilter<"MatchSetting"> | $Enums.AIDifficulty | null
    createdAt?: DateTimeFilter<"MatchSetting"> | Date | string
    requiredCurrency?: IntFilter<"MatchSetting"> | number
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
  }, "id" | "matchId">

  export type MatchSettingOrderByWithAggregationInput = {
    id?: SortOrder
    matchId?: SortOrder
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    allowPowerUps?: SortOrder
    aiDifficulty?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    requiredCurrency?: SortOrder
    _count?: MatchSettingCountOrderByAggregateInput
    _avg?: MatchSettingAvgOrderByAggregateInput
    _max?: MatchSettingMaxOrderByAggregateInput
    _min?: MatchSettingMinOrderByAggregateInput
    _sum?: MatchSettingSumOrderByAggregateInput
  }

  export type MatchSettingScalarWhereWithAggregatesInput = {
    AND?: MatchSettingScalarWhereWithAggregatesInput | MatchSettingScalarWhereWithAggregatesInput[]
    OR?: MatchSettingScalarWhereWithAggregatesInput[]
    NOT?: MatchSettingScalarWhereWithAggregatesInput | MatchSettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MatchSetting"> | string
    matchId?: StringWithAggregatesFilter<"MatchSetting"> | string
    scoreLimit?: IntWithAggregatesFilter<"MatchSetting"> | number
    pauseTime?: IntWithAggregatesFilter<"MatchSetting"> | number
    allowPowerUps?: BoolWithAggregatesFilter<"MatchSetting"> | boolean
    aiDifficulty?: EnumAIDifficultyNullableWithAggregatesFilter<"MatchSetting"> | $Enums.AIDifficulty | null
    createdAt?: DateTimeWithAggregatesFilter<"MatchSetting"> | Date | string
    requiredCurrency?: IntWithAggregatesFilter<"MatchSetting"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    userId?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    matchPlayers?: MatchPlayerListRelationFilter
    matchSpectators?: MatchSpectatorListRelationFilter
    bets?: BetListRelationFilter
    invitationsSent?: InvitationListRelationFilter
    invitationsReceived?: InvitationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    matchPlayers?: MatchPlayerOrderByRelationAggregateInput
    matchSpectators?: MatchSpectatorOrderByRelationAggregateInput
    bets?: BetOrderByRelationAggregateInput
    invitationsSent?: InvitationOrderByRelationAggregateInput
    invitationsReceived?: InvitationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    matchPlayers?: MatchPlayerListRelationFilter
    matchSpectators?: MatchSpectatorListRelationFilter
    bets?: BetListRelationFilter
    invitationsSent?: InvitationListRelationFilter
    invitationsReceived?: InvitationListRelationFilter
  }, "id" | "userId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    userId?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type InvitationWhereInput = {
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    id?: StringFilter<"Invitation"> | string
    senderId?: StringFilter<"Invitation"> | string
    receiverId?: StringNullableFilter<"Invitation"> | string | null
    status?: EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus
    type?: EnumInvitationTypeFilter<"Invitation"> | $Enums.InvitationType
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    inviteCode?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    scoreLimit?: IntFilter<"Invitation"> | number
    pauseTime?: IntFilter<"Invitation"> | number
    allowPowerUps?: BoolFilter<"Invitation"> | boolean
    requiredCurrency?: IntFilter<"Invitation"> | number
    message?: StringNullableFilter<"Invitation"> | string | null
    matchId?: StringNullableFilter<"Invitation"> | string | null
    match?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type InvitationOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inviteCode?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    allowPowerUps?: SortOrder
    requiredCurrency?: SortOrder
    message?: SortOrderInput | SortOrder
    matchId?: SortOrderInput | SortOrder
    match?: MatchOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type InvitationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    inviteCode?: string
    matchId?: string
    AND?: InvitationWhereInput | InvitationWhereInput[]
    OR?: InvitationWhereInput[]
    NOT?: InvitationWhereInput | InvitationWhereInput[]
    senderId?: StringFilter<"Invitation"> | string
    receiverId?: StringNullableFilter<"Invitation"> | string | null
    status?: EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus
    type?: EnumInvitationTypeFilter<"Invitation"> | $Enums.InvitationType
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    expiresAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    scoreLimit?: IntFilter<"Invitation"> | number
    pauseTime?: IntFilter<"Invitation"> | number
    allowPowerUps?: BoolFilter<"Invitation"> | boolean
    requiredCurrency?: IntFilter<"Invitation"> | number
    message?: StringNullableFilter<"Invitation"> | string | null
    match?: XOR<MatchNullableScalarRelationFilter, MatchWhereInput> | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "inviteCode" | "matchId">

  export type InvitationOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inviteCode?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    allowPowerUps?: SortOrder
    requiredCurrency?: SortOrder
    message?: SortOrderInput | SortOrder
    matchId?: SortOrderInput | SortOrder
    _count?: InvitationCountOrderByAggregateInput
    _avg?: InvitationAvgOrderByAggregateInput
    _max?: InvitationMaxOrderByAggregateInput
    _min?: InvitationMinOrderByAggregateInput
    _sum?: InvitationSumOrderByAggregateInput
  }

  export type InvitationScalarWhereWithAggregatesInput = {
    AND?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    OR?: InvitationScalarWhereWithAggregatesInput[]
    NOT?: InvitationScalarWhereWithAggregatesInput | InvitationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invitation"> | string
    senderId?: StringWithAggregatesFilter<"Invitation"> | string
    receiverId?: StringNullableWithAggregatesFilter<"Invitation"> | string | null
    status?: EnumInvitationStatusWithAggregatesFilter<"Invitation"> | $Enums.InvitationStatus
    type?: EnumInvitationTypeWithAggregatesFilter<"Invitation"> | $Enums.InvitationType
    createdAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Invitation"> | Date | string
    inviteCode?: StringWithAggregatesFilter<"Invitation"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Invitation"> | Date | string | null
    scoreLimit?: IntWithAggregatesFilter<"Invitation"> | number
    pauseTime?: IntWithAggregatesFilter<"Invitation"> | number
    allowPowerUps?: BoolWithAggregatesFilter<"Invitation"> | boolean
    requiredCurrency?: IntWithAggregatesFilter<"Invitation"> | number
    message?: StringNullableWithAggregatesFilter<"Invitation"> | string | null
    matchId?: StringNullableWithAggregatesFilter<"Invitation"> | string | null
  }

  export type BetWhereInput = {
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    id?: StringFilter<"Bet"> | string
    amount?: IntFilter<"Bet"> | number
    predictedWinnerId?: StringNullableFilter<"Bet"> | string | null
    status?: EnumBetStatusFilter<"Bet"> | $Enums.BetStatus
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    userId?: StringFilter<"Bet"> | string
    matchId?: StringFilter<"Bet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
  }

  export type BetOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    predictedWinnerId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    user?: UserOrderByWithRelationInput
    match?: MatchOrderByWithRelationInput
  }

  export type BetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    amount?: IntFilter<"Bet"> | number
    predictedWinnerId?: StringNullableFilter<"Bet"> | string | null
    status?: EnumBetStatusFilter<"Bet"> | $Enums.BetStatus
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    userId?: StringFilter<"Bet"> | string
    matchId?: StringFilter<"Bet"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    match?: XOR<MatchScalarRelationFilter, MatchWhereInput>
  }, "id">

  export type BetOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    predictedWinnerId?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    userId?: SortOrder
    matchId?: SortOrder
    _count?: BetCountOrderByAggregateInput
    _avg?: BetAvgOrderByAggregateInput
    _max?: BetMaxOrderByAggregateInput
    _min?: BetMinOrderByAggregateInput
    _sum?: BetSumOrderByAggregateInput
  }

  export type BetScalarWhereWithAggregatesInput = {
    AND?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    OR?: BetScalarWhereWithAggregatesInput[]
    NOT?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bet"> | string
    amount?: IntWithAggregatesFilter<"Bet"> | number
    predictedWinnerId?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    status?: EnumBetStatusWithAggregatesFilter<"Bet"> | $Enums.BetStatus
    createdAt?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Bet"> | Date | string | null
    userId?: StringWithAggregatesFilter<"Bet"> | string
    matchId?: StringWithAggregatesFilter<"Bet"> | string
  }

  export type MatchSpectatorCreateInput = {
    id?: string
    username: string
    match: MatchCreateNestedOneWithoutSpectatorsInput
    user: UserCreateNestedOneWithoutMatchSpectatorsInput
  }

  export type MatchSpectatorUncheckedCreateInput = {
    id?: string
    userId: string
    username: string
    matchId: string
  }

  export type MatchSpectatorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    match?: MatchUpdateOneRequiredWithoutSpectatorsNestedInput
    user?: UserUpdateOneRequiredWithoutMatchSpectatorsNestedInput
  }

  export type MatchSpectatorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type MatchSpectatorCreateManyInput = {
    id?: string
    userId: string
    username: string
    matchId: string
  }

  export type MatchSpectatorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type MatchSpectatorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type MatchPlayerCreateInput = {
    id?: string
    username: string
    avatarUrl?: string | null
    isAI?: boolean
    finalScore?: number
    isReady?: boolean
    isHost?: boolean
    characterId: string
    paddleId: string
    rankTier: string
    rankDivision: string
    rankChange?: number | null
    matchAsOpponent1?: MatchCreateNestedOneWithoutOpponent1Input
    matchAsOpponent2?: MatchCreateNestedOneWithoutOpponent2Input
    User?: UserCreateNestedOneWithoutMatchPlayersInput
  }

  export type MatchPlayerUncheckedCreateInput = {
    id?: string
    userId?: string | null
    username: string
    avatarUrl?: string | null
    isAI?: boolean
    finalScore?: number
    isReady?: boolean
    isHost?: boolean
    characterId: string
    paddleId: string
    rankTier: string
    rankDivision: string
    rankChange?: number | null
    matchAsOpponent1?: MatchUncheckedCreateNestedOneWithoutOpponent1Input
    matchAsOpponent2?: MatchUncheckedCreateNestedOneWithoutOpponent2Input
  }

  export type MatchPlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    finalScore?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isHost?: BoolFieldUpdateOperationsInput | boolean
    characterId?: StringFieldUpdateOperationsInput | string
    paddleId?: StringFieldUpdateOperationsInput | string
    rankTier?: StringFieldUpdateOperationsInput | string
    rankDivision?: StringFieldUpdateOperationsInput | string
    rankChange?: NullableIntFieldUpdateOperationsInput | number | null
    matchAsOpponent1?: MatchUpdateOneWithoutOpponent1NestedInput
    matchAsOpponent2?: MatchUpdateOneWithoutOpponent2NestedInput
    User?: UserUpdateOneWithoutMatchPlayersNestedInput
  }

  export type MatchPlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    finalScore?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isHost?: BoolFieldUpdateOperationsInput | boolean
    characterId?: StringFieldUpdateOperationsInput | string
    paddleId?: StringFieldUpdateOperationsInput | string
    rankTier?: StringFieldUpdateOperationsInput | string
    rankDivision?: StringFieldUpdateOperationsInput | string
    rankChange?: NullableIntFieldUpdateOperationsInput | number | null
    matchAsOpponent1?: MatchUncheckedUpdateOneWithoutOpponent1NestedInput
    matchAsOpponent2?: MatchUncheckedUpdateOneWithoutOpponent2NestedInput
  }

  export type MatchPlayerCreateManyInput = {
    id?: string
    userId?: string | null
    username: string
    avatarUrl?: string | null
    isAI?: boolean
    finalScore?: number
    isReady?: boolean
    isHost?: boolean
    characterId: string
    paddleId: string
    rankTier: string
    rankDivision: string
    rankChange?: number | null
  }

  export type MatchPlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    finalScore?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isHost?: BoolFieldUpdateOperationsInput | boolean
    characterId?: StringFieldUpdateOperationsInput | string
    paddleId?: StringFieldUpdateOperationsInput | string
    rankTier?: StringFieldUpdateOperationsInput | string
    rankDivision?: StringFieldUpdateOperationsInput | string
    rankChange?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchPlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    finalScore?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isHost?: BoolFieldUpdateOperationsInput | boolean
    characterId?: StringFieldUpdateOperationsInput | string
    paddleId?: StringFieldUpdateOperationsInput | string
    rankTier?: StringFieldUpdateOperationsInput | string
    rankDivision?: StringFieldUpdateOperationsInput | string
    rankChange?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchCreateInput = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1: MatchPlayerCreateNestedOneWithoutMatchAsOpponent1Input
    opponent2?: MatchPlayerCreateNestedOneWithoutMatchAsOpponent2Input
    spectators?: MatchSpectatorCreateNestedManyWithoutMatchInput
    bets?: BetCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingCreateNestedOneWithoutMatchInput
    invitation?: InvitationCreateNestedOneWithoutMatchInput
  }

  export type MatchUncheckedCreateInput = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1Id: string
    opponent2Id?: string | null
    spectators?: MatchSpectatorUncheckedCreateNestedManyWithoutMatchInput
    bets?: BetUncheckedCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingUncheckedCreateNestedOneWithoutMatchInput
    invitation?: InvitationUncheckedCreateNestedOneWithoutMatchInput
  }

  export type MatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1?: MatchPlayerUpdateOneRequiredWithoutMatchAsOpponent1NestedInput
    opponent2?: MatchPlayerUpdateOneWithoutMatchAsOpponent2NestedInput
    spectators?: MatchSpectatorUpdateManyWithoutMatchNestedInput
    bets?: BetUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUpdateOneWithoutMatchNestedInput
    invitation?: InvitationUpdateOneWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1Id?: StringFieldUpdateOperationsInput | string
    opponent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    spectators?: MatchSpectatorUncheckedUpdateManyWithoutMatchNestedInput
    bets?: BetUncheckedUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUncheckedUpdateOneWithoutMatchNestedInput
    invitation?: InvitationUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type MatchCreateManyInput = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1Id: string
    opponent2Id?: string | null
  }

  export type MatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1Id?: StringFieldUpdateOperationsInput | string
    opponent2Id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchSettingCreateInput = {
    id?: string
    scoreLimit: number
    pauseTime: number
    allowPowerUps?: boolean
    aiDifficulty?: $Enums.AIDifficulty | null
    createdAt?: Date | string
    requiredCurrency: number
    match: MatchCreateNestedOneWithoutMatchSettingInput
  }

  export type MatchSettingUncheckedCreateInput = {
    id?: string
    matchId: string
    scoreLimit: number
    pauseTime: number
    allowPowerUps?: boolean
    aiDifficulty?: $Enums.AIDifficulty | null
    createdAt?: Date | string
    requiredCurrency: number
  }

  export type MatchSettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    aiDifficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    match?: MatchUpdateOneRequiredWithoutMatchSettingNestedInput
  }

  export type MatchSettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    aiDifficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredCurrency?: IntFieldUpdateOperationsInput | number
  }

  export type MatchSettingCreateManyInput = {
    id?: string
    matchId: string
    scoreLimit: number
    pauseTime: number
    allowPowerUps?: boolean
    aiDifficulty?: $Enums.AIDifficulty | null
    createdAt?: Date | string
    requiredCurrency: number
  }

  export type MatchSettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    aiDifficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredCurrency?: IntFieldUpdateOperationsInput | number
  }

  export type MatchSettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    aiDifficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredCurrency?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchPlayers?: MatchPlayerCreateNestedManyWithoutUserInput
    matchSpectators?: MatchSpectatorCreateNestedManyWithoutUserInput
    bets?: BetCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutSenderInput
    invitationsReceived?: InvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchPlayers?: MatchPlayerUncheckedCreateNestedManyWithoutUserInput
    matchSpectators?: MatchSpectatorUncheckedCreateNestedManyWithoutUserInput
    bets?: BetUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    invitationsReceived?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPlayers?: MatchPlayerUpdateManyWithoutUserNestedInput
    matchSpectators?: MatchSpectatorUpdateManyWithoutUserNestedInput
    bets?: BetUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutSenderNestedInput
    invitationsReceived?: InvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPlayers?: MatchPlayerUncheckedUpdateManyWithoutUserNestedInput
    matchSpectators?: MatchSpectatorUncheckedUpdateManyWithoutUserNestedInput
    bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    invitationsReceived?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InvitationCreateInput = {
    id?: string
    status?: $Enums.InvitationStatus
    type?: $Enums.InvitationType
    createdAt?: Date | string
    updatedAt?: Date | string
    inviteCode: string
    expiresAt?: Date | string | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency?: number
    message?: string | null
    match?: MatchCreateNestedOneWithoutInvitationInput
    sender: UserCreateNestedOneWithoutInvitationsSentInput
    receiver?: UserCreateNestedOneWithoutInvitationsReceivedInput
  }

  export type InvitationUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId?: string | null
    status?: $Enums.InvitationStatus
    type?: $Enums.InvitationType
    createdAt?: Date | string
    updatedAt?: Date | string
    inviteCode: string
    expiresAt?: Date | string | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency?: number
    message?: string | null
    matchId?: string | null
  }

  export type InvitationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    match?: MatchUpdateOneWithoutInvitationNestedInput
    sender?: UserUpdateOneRequiredWithoutInvitationsSentNestedInput
    receiver?: UserUpdateOneWithoutInvitationsReceivedNestedInput
  }

  export type InvitationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvitationCreateManyInput = {
    id?: string
    senderId: string
    receiverId?: string | null
    status?: $Enums.InvitationStatus
    type?: $Enums.InvitationType
    createdAt?: Date | string
    updatedAt?: Date | string
    inviteCode: string
    expiresAt?: Date | string | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency?: number
    message?: string | null
    matchId?: string | null
  }

  export type InvitationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvitationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BetCreateInput = {
    id?: string
    amount: number
    predictedWinnerId?: string | null
    status?: $Enums.BetStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    user: UserCreateNestedOneWithoutBetsInput
    match: MatchCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateInput = {
    id?: string
    amount: number
    predictedWinnerId?: string | null
    status?: $Enums.BetStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    userId: string
    matchId: string
  }

  export type BetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    predictedWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBetsNestedInput
    match?: MatchUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    predictedWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type BetCreateManyInput = {
    id?: string
    amount: number
    predictedWinnerId?: string | null
    status?: $Enums.BetStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    userId: string
    matchId: string
  }

  export type BetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    predictedWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    predictedWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MatchScalarRelationFilter = {
    is?: MatchWhereInput
    isNot?: MatchWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MatchSpectatorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    matchId?: SortOrder
  }

  export type MatchSpectatorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    matchId?: SortOrder
  }

  export type MatchSpectatorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    matchId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type MatchNullableScalarRelationFilter = {
    is?: MatchWhereInput | null
    isNot?: MatchWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MatchPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    isAI?: SortOrder
    finalScore?: SortOrder
    isReady?: SortOrder
    isHost?: SortOrder
    characterId?: SortOrder
    paddleId?: SortOrder
    rankTier?: SortOrder
    rankDivision?: SortOrder
    rankChange?: SortOrder
  }

  export type MatchPlayerAvgOrderByAggregateInput = {
    finalScore?: SortOrder
    rankChange?: SortOrder
  }

  export type MatchPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    isAI?: SortOrder
    finalScore?: SortOrder
    isReady?: SortOrder
    isHost?: SortOrder
    characterId?: SortOrder
    paddleId?: SortOrder
    rankTier?: SortOrder
    rankDivision?: SortOrder
    rankChange?: SortOrder
  }

  export type MatchPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    username?: SortOrder
    avatarUrl?: SortOrder
    isAI?: SortOrder
    finalScore?: SortOrder
    isReady?: SortOrder
    isHost?: SortOrder
    characterId?: SortOrder
    paddleId?: SortOrder
    rankTier?: SortOrder
    rankDivision?: SortOrder
    rankChange?: SortOrder
  }

  export type MatchPlayerSumOrderByAggregateInput = {
    finalScore?: SortOrder
    rankChange?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumGameModeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[]
    notIn?: $Enums.GameMode[]
    not?: NestedEnumGameModeFilter<$PrismaModel> | $Enums.GameMode
  }

  export type EnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[]
    notIn?: $Enums.GameStatus[]
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type MatchPlayerScalarRelationFilter = {
    is?: MatchPlayerWhereInput
    isNot?: MatchPlayerWhereInput
  }

  export type MatchPlayerNullableScalarRelationFilter = {
    is?: MatchPlayerWhereInput | null
    isNot?: MatchPlayerWhereInput | null
  }

  export type MatchSpectatorListRelationFilter = {
    every?: MatchSpectatorWhereInput
    some?: MatchSpectatorWhereInput
    none?: MatchSpectatorWhereInput
  }

  export type BetListRelationFilter = {
    every?: BetWhereInput
    some?: BetWhereInput
    none?: BetWhereInput
  }

  export type MatchSettingNullableScalarRelationFilter = {
    is?: MatchSettingWhereInput | null
    isNot?: MatchSettingWhereInput | null
  }

  export type InvitationNullableScalarRelationFilter = {
    is?: InvitationWhereInput | null
    isNot?: InvitationWhereInput | null
  }

  export type MatchSpectatorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BetOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MatchCountOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
    winnerId?: SortOrder
    opponent1Id?: SortOrder
    opponent2Id?: SortOrder
  }

  export type MatchAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type MatchMaxOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
    winnerId?: SortOrder
    opponent1Id?: SortOrder
    opponent2Id?: SortOrder
  }

  export type MatchMinOrderByAggregateInput = {
    id?: SortOrder
    mode?: SortOrder
    status?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
    confirmedAt?: SortOrder
    winnerId?: SortOrder
    opponent1Id?: SortOrder
    opponent2Id?: SortOrder
  }

  export type MatchSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumGameModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[]
    notIn?: $Enums.GameMode[]
    not?: NestedEnumGameModeWithAggregatesFilter<$PrismaModel> | $Enums.GameMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameModeFilter<$PrismaModel>
    _max?: NestedEnumGameModeFilter<$PrismaModel>
  }

  export type EnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[]
    notIn?: $Enums.GameStatus[]
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAIDifficultyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AIDifficulty | EnumAIDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIDifficulty[] | null
    notIn?: $Enums.AIDifficulty[] | null
    not?: NestedEnumAIDifficultyNullableFilter<$PrismaModel> | $Enums.AIDifficulty | null
  }

  export type MatchSettingCountOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    allowPowerUps?: SortOrder
    aiDifficulty?: SortOrder
    createdAt?: SortOrder
    requiredCurrency?: SortOrder
  }

  export type MatchSettingAvgOrderByAggregateInput = {
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    requiredCurrency?: SortOrder
  }

  export type MatchSettingMaxOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    allowPowerUps?: SortOrder
    aiDifficulty?: SortOrder
    createdAt?: SortOrder
    requiredCurrency?: SortOrder
  }

  export type MatchSettingMinOrderByAggregateInput = {
    id?: SortOrder
    matchId?: SortOrder
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    allowPowerUps?: SortOrder
    aiDifficulty?: SortOrder
    createdAt?: SortOrder
    requiredCurrency?: SortOrder
  }

  export type MatchSettingSumOrderByAggregateInput = {
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    requiredCurrency?: SortOrder
  }

  export type EnumAIDifficultyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIDifficulty | EnumAIDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIDifficulty[] | null
    notIn?: $Enums.AIDifficulty[] | null
    not?: NestedEnumAIDifficultyNullableWithAggregatesFilter<$PrismaModel> | $Enums.AIDifficulty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAIDifficultyNullableFilter<$PrismaModel>
    _max?: NestedEnumAIDifficultyNullableFilter<$PrismaModel>
  }

  export type MatchPlayerListRelationFilter = {
    every?: MatchPlayerWhereInput
    some?: MatchPlayerWhereInput
    none?: MatchPlayerWhereInput
  }

  export type InvitationListRelationFilter = {
    every?: InvitationWhereInput
    some?: InvitationWhereInput
    none?: InvitationWhereInput
  }

  export type MatchPlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InvitationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type EnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[]
    notIn?: $Enums.InvitationStatus[]
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type EnumInvitationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationType | EnumInvitationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationType[]
    notIn?: $Enums.InvitationType[]
    not?: NestedEnumInvitationTypeFilter<$PrismaModel> | $Enums.InvitationType
  }

  export type InvitationCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inviteCode?: SortOrder
    expiresAt?: SortOrder
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    allowPowerUps?: SortOrder
    requiredCurrency?: SortOrder
    message?: SortOrder
    matchId?: SortOrder
  }

  export type InvitationAvgOrderByAggregateInput = {
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    requiredCurrency?: SortOrder
  }

  export type InvitationMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inviteCode?: SortOrder
    expiresAt?: SortOrder
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    allowPowerUps?: SortOrder
    requiredCurrency?: SortOrder
    message?: SortOrder
    matchId?: SortOrder
  }

  export type InvitationMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    inviteCode?: SortOrder
    expiresAt?: SortOrder
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    allowPowerUps?: SortOrder
    requiredCurrency?: SortOrder
    message?: SortOrder
    matchId?: SortOrder
  }

  export type InvitationSumOrderByAggregateInput = {
    scoreLimit?: SortOrder
    pauseTime?: SortOrder
    requiredCurrency?: SortOrder
  }

  export type EnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[]
    notIn?: $Enums.InvitationStatus[]
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type EnumInvitationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationType | EnumInvitationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationType[]
    notIn?: $Enums.InvitationType[]
    not?: NestedEnumInvitationTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvitationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationTypeFilter<$PrismaModel>
    _max?: NestedEnumInvitationTypeFilter<$PrismaModel>
  }

  export type EnumBetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BetStatus | EnumBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BetStatus[]
    notIn?: $Enums.BetStatus[]
    not?: NestedEnumBetStatusFilter<$PrismaModel> | $Enums.BetStatus
  }

  export type BetCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    predictedWinnerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
  }

  export type BetAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BetMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    predictedWinnerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
  }

  export type BetMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    predictedWinnerId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    userId?: SortOrder
    matchId?: SortOrder
  }

  export type BetSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumBetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BetStatus | EnumBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BetStatus[]
    notIn?: $Enums.BetStatus[]
    not?: NestedEnumBetStatusWithAggregatesFilter<$PrismaModel> | $Enums.BetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBetStatusFilter<$PrismaModel>
    _max?: NestedEnumBetStatusFilter<$PrismaModel>
  }

  export type MatchCreateNestedOneWithoutSpectatorsInput = {
    create?: XOR<MatchCreateWithoutSpectatorsInput, MatchUncheckedCreateWithoutSpectatorsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutSpectatorsInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchSpectatorsInput = {
    create?: XOR<UserCreateWithoutMatchSpectatorsInput, UserUncheckedCreateWithoutMatchSpectatorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchSpectatorsInput
    connect?: UserWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MatchUpdateOneRequiredWithoutSpectatorsNestedInput = {
    create?: XOR<MatchCreateWithoutSpectatorsInput, MatchUncheckedCreateWithoutSpectatorsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutSpectatorsInput
    upsert?: MatchUpsertWithoutSpectatorsInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutSpectatorsInput, MatchUpdateWithoutSpectatorsInput>, MatchUncheckedUpdateWithoutSpectatorsInput>
  }

  export type UserUpdateOneRequiredWithoutMatchSpectatorsNestedInput = {
    create?: XOR<UserCreateWithoutMatchSpectatorsInput, UserUncheckedCreateWithoutMatchSpectatorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchSpectatorsInput
    upsert?: UserUpsertWithoutMatchSpectatorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchSpectatorsInput, UserUpdateWithoutMatchSpectatorsInput>, UserUncheckedUpdateWithoutMatchSpectatorsInput>
  }

  export type MatchCreateNestedOneWithoutOpponent1Input = {
    create?: XOR<MatchCreateWithoutOpponent1Input, MatchUncheckedCreateWithoutOpponent1Input>
    connectOrCreate?: MatchCreateOrConnectWithoutOpponent1Input
    connect?: MatchWhereUniqueInput
  }

  export type MatchCreateNestedOneWithoutOpponent2Input = {
    create?: XOR<MatchCreateWithoutOpponent2Input, MatchUncheckedCreateWithoutOpponent2Input>
    connectOrCreate?: MatchCreateOrConnectWithoutOpponent2Input
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMatchPlayersInput = {
    create?: XOR<UserCreateWithoutMatchPlayersInput, UserUncheckedCreateWithoutMatchPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchPlayersInput
    connect?: UserWhereUniqueInput
  }

  export type MatchUncheckedCreateNestedOneWithoutOpponent1Input = {
    create?: XOR<MatchCreateWithoutOpponent1Input, MatchUncheckedCreateWithoutOpponent1Input>
    connectOrCreate?: MatchCreateOrConnectWithoutOpponent1Input
    connect?: MatchWhereUniqueInput
  }

  export type MatchUncheckedCreateNestedOneWithoutOpponent2Input = {
    create?: XOR<MatchCreateWithoutOpponent2Input, MatchUncheckedCreateWithoutOpponent2Input>
    connectOrCreate?: MatchCreateOrConnectWithoutOpponent2Input
    connect?: MatchWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MatchUpdateOneWithoutOpponent1NestedInput = {
    create?: XOR<MatchCreateWithoutOpponent1Input, MatchUncheckedCreateWithoutOpponent1Input>
    connectOrCreate?: MatchCreateOrConnectWithoutOpponent1Input
    upsert?: MatchUpsertWithoutOpponent1Input
    disconnect?: MatchWhereInput | boolean
    delete?: MatchWhereInput | boolean
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutOpponent1Input, MatchUpdateWithoutOpponent1Input>, MatchUncheckedUpdateWithoutOpponent1Input>
  }

  export type MatchUpdateOneWithoutOpponent2NestedInput = {
    create?: XOR<MatchCreateWithoutOpponent2Input, MatchUncheckedCreateWithoutOpponent2Input>
    connectOrCreate?: MatchCreateOrConnectWithoutOpponent2Input
    upsert?: MatchUpsertWithoutOpponent2Input
    disconnect?: MatchWhereInput | boolean
    delete?: MatchWhereInput | boolean
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutOpponent2Input, MatchUpdateWithoutOpponent2Input>, MatchUncheckedUpdateWithoutOpponent2Input>
  }

  export type UserUpdateOneWithoutMatchPlayersNestedInput = {
    create?: XOR<UserCreateWithoutMatchPlayersInput, UserUncheckedCreateWithoutMatchPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMatchPlayersInput
    upsert?: UserUpsertWithoutMatchPlayersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMatchPlayersInput, UserUpdateWithoutMatchPlayersInput>, UserUncheckedUpdateWithoutMatchPlayersInput>
  }

  export type MatchUncheckedUpdateOneWithoutOpponent1NestedInput = {
    create?: XOR<MatchCreateWithoutOpponent1Input, MatchUncheckedCreateWithoutOpponent1Input>
    connectOrCreate?: MatchCreateOrConnectWithoutOpponent1Input
    upsert?: MatchUpsertWithoutOpponent1Input
    disconnect?: MatchWhereInput | boolean
    delete?: MatchWhereInput | boolean
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutOpponent1Input, MatchUpdateWithoutOpponent1Input>, MatchUncheckedUpdateWithoutOpponent1Input>
  }

  export type MatchUncheckedUpdateOneWithoutOpponent2NestedInput = {
    create?: XOR<MatchCreateWithoutOpponent2Input, MatchUncheckedCreateWithoutOpponent2Input>
    connectOrCreate?: MatchCreateOrConnectWithoutOpponent2Input
    upsert?: MatchUpsertWithoutOpponent2Input
    disconnect?: MatchWhereInput | boolean
    delete?: MatchWhereInput | boolean
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutOpponent2Input, MatchUpdateWithoutOpponent2Input>, MatchUncheckedUpdateWithoutOpponent2Input>
  }

  export type MatchPlayerCreateNestedOneWithoutMatchAsOpponent1Input = {
    create?: XOR<MatchPlayerCreateWithoutMatchAsOpponent1Input, MatchPlayerUncheckedCreateWithoutMatchAsOpponent1Input>
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutMatchAsOpponent1Input
    connect?: MatchPlayerWhereUniqueInput
  }

  export type MatchPlayerCreateNestedOneWithoutMatchAsOpponent2Input = {
    create?: XOR<MatchPlayerCreateWithoutMatchAsOpponent2Input, MatchPlayerUncheckedCreateWithoutMatchAsOpponent2Input>
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutMatchAsOpponent2Input
    connect?: MatchPlayerWhereUniqueInput
  }

  export type MatchSpectatorCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchSpectatorCreateWithoutMatchInput, MatchSpectatorUncheckedCreateWithoutMatchInput> | MatchSpectatorCreateWithoutMatchInput[] | MatchSpectatorUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchSpectatorCreateOrConnectWithoutMatchInput | MatchSpectatorCreateOrConnectWithoutMatchInput[]
    createMany?: MatchSpectatorCreateManyMatchInputEnvelope
    connect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
  }

  export type BetCreateNestedManyWithoutMatchInput = {
    create?: XOR<BetCreateWithoutMatchInput, BetUncheckedCreateWithoutMatchInput> | BetCreateWithoutMatchInput[] | BetUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: BetCreateOrConnectWithoutMatchInput | BetCreateOrConnectWithoutMatchInput[]
    createMany?: BetCreateManyMatchInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type MatchSettingCreateNestedOneWithoutMatchInput = {
    create?: XOR<MatchSettingCreateWithoutMatchInput, MatchSettingUncheckedCreateWithoutMatchInput>
    connectOrCreate?: MatchSettingCreateOrConnectWithoutMatchInput
    connect?: MatchSettingWhereUniqueInput
  }

  export type InvitationCreateNestedOneWithoutMatchInput = {
    create?: XOR<InvitationCreateWithoutMatchInput, InvitationUncheckedCreateWithoutMatchInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutMatchInput
    connect?: InvitationWhereUniqueInput
  }

  export type MatchSpectatorUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<MatchSpectatorCreateWithoutMatchInput, MatchSpectatorUncheckedCreateWithoutMatchInput> | MatchSpectatorCreateWithoutMatchInput[] | MatchSpectatorUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchSpectatorCreateOrConnectWithoutMatchInput | MatchSpectatorCreateOrConnectWithoutMatchInput[]
    createMany?: MatchSpectatorCreateManyMatchInputEnvelope
    connect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
  }

  export type BetUncheckedCreateNestedManyWithoutMatchInput = {
    create?: XOR<BetCreateWithoutMatchInput, BetUncheckedCreateWithoutMatchInput> | BetCreateWithoutMatchInput[] | BetUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: BetCreateOrConnectWithoutMatchInput | BetCreateOrConnectWithoutMatchInput[]
    createMany?: BetCreateManyMatchInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type MatchSettingUncheckedCreateNestedOneWithoutMatchInput = {
    create?: XOR<MatchSettingCreateWithoutMatchInput, MatchSettingUncheckedCreateWithoutMatchInput>
    connectOrCreate?: MatchSettingCreateOrConnectWithoutMatchInput
    connect?: MatchSettingWhereUniqueInput
  }

  export type InvitationUncheckedCreateNestedOneWithoutMatchInput = {
    create?: XOR<InvitationCreateWithoutMatchInput, InvitationUncheckedCreateWithoutMatchInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutMatchInput
    connect?: InvitationWhereUniqueInput
  }

  export type EnumGameModeFieldUpdateOperationsInput = {
    set?: $Enums.GameMode
  }

  export type EnumGameStatusFieldUpdateOperationsInput = {
    set?: $Enums.GameStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type MatchPlayerUpdateOneRequiredWithoutMatchAsOpponent1NestedInput = {
    create?: XOR<MatchPlayerCreateWithoutMatchAsOpponent1Input, MatchPlayerUncheckedCreateWithoutMatchAsOpponent1Input>
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutMatchAsOpponent1Input
    upsert?: MatchPlayerUpsertWithoutMatchAsOpponent1Input
    connect?: MatchPlayerWhereUniqueInput
    update?: XOR<XOR<MatchPlayerUpdateToOneWithWhereWithoutMatchAsOpponent1Input, MatchPlayerUpdateWithoutMatchAsOpponent1Input>, MatchPlayerUncheckedUpdateWithoutMatchAsOpponent1Input>
  }

  export type MatchPlayerUpdateOneWithoutMatchAsOpponent2NestedInput = {
    create?: XOR<MatchPlayerCreateWithoutMatchAsOpponent2Input, MatchPlayerUncheckedCreateWithoutMatchAsOpponent2Input>
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutMatchAsOpponent2Input
    upsert?: MatchPlayerUpsertWithoutMatchAsOpponent2Input
    disconnect?: MatchPlayerWhereInput | boolean
    delete?: MatchPlayerWhereInput | boolean
    connect?: MatchPlayerWhereUniqueInput
    update?: XOR<XOR<MatchPlayerUpdateToOneWithWhereWithoutMatchAsOpponent2Input, MatchPlayerUpdateWithoutMatchAsOpponent2Input>, MatchPlayerUncheckedUpdateWithoutMatchAsOpponent2Input>
  }

  export type MatchSpectatorUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchSpectatorCreateWithoutMatchInput, MatchSpectatorUncheckedCreateWithoutMatchInput> | MatchSpectatorCreateWithoutMatchInput[] | MatchSpectatorUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchSpectatorCreateOrConnectWithoutMatchInput | MatchSpectatorCreateOrConnectWithoutMatchInput[]
    upsert?: MatchSpectatorUpsertWithWhereUniqueWithoutMatchInput | MatchSpectatorUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchSpectatorCreateManyMatchInputEnvelope
    set?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    disconnect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    delete?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    connect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    update?: MatchSpectatorUpdateWithWhereUniqueWithoutMatchInput | MatchSpectatorUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchSpectatorUpdateManyWithWhereWithoutMatchInput | MatchSpectatorUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchSpectatorScalarWhereInput | MatchSpectatorScalarWhereInput[]
  }

  export type BetUpdateManyWithoutMatchNestedInput = {
    create?: XOR<BetCreateWithoutMatchInput, BetUncheckedCreateWithoutMatchInput> | BetCreateWithoutMatchInput[] | BetUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: BetCreateOrConnectWithoutMatchInput | BetCreateOrConnectWithoutMatchInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutMatchInput | BetUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: BetCreateManyMatchInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutMatchInput | BetUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: BetUpdateManyWithWhereWithoutMatchInput | BetUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type MatchSettingUpdateOneWithoutMatchNestedInput = {
    create?: XOR<MatchSettingCreateWithoutMatchInput, MatchSettingUncheckedCreateWithoutMatchInput>
    connectOrCreate?: MatchSettingCreateOrConnectWithoutMatchInput
    upsert?: MatchSettingUpsertWithoutMatchInput
    disconnect?: MatchSettingWhereInput | boolean
    delete?: MatchSettingWhereInput | boolean
    connect?: MatchSettingWhereUniqueInput
    update?: XOR<XOR<MatchSettingUpdateToOneWithWhereWithoutMatchInput, MatchSettingUpdateWithoutMatchInput>, MatchSettingUncheckedUpdateWithoutMatchInput>
  }

  export type InvitationUpdateOneWithoutMatchNestedInput = {
    create?: XOR<InvitationCreateWithoutMatchInput, InvitationUncheckedCreateWithoutMatchInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutMatchInput
    upsert?: InvitationUpsertWithoutMatchInput
    disconnect?: InvitationWhereInput | boolean
    delete?: InvitationWhereInput | boolean
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutMatchInput, InvitationUpdateWithoutMatchInput>, InvitationUncheckedUpdateWithoutMatchInput>
  }

  export type MatchSpectatorUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<MatchSpectatorCreateWithoutMatchInput, MatchSpectatorUncheckedCreateWithoutMatchInput> | MatchSpectatorCreateWithoutMatchInput[] | MatchSpectatorUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: MatchSpectatorCreateOrConnectWithoutMatchInput | MatchSpectatorCreateOrConnectWithoutMatchInput[]
    upsert?: MatchSpectatorUpsertWithWhereUniqueWithoutMatchInput | MatchSpectatorUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: MatchSpectatorCreateManyMatchInputEnvelope
    set?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    disconnect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    delete?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    connect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    update?: MatchSpectatorUpdateWithWhereUniqueWithoutMatchInput | MatchSpectatorUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: MatchSpectatorUpdateManyWithWhereWithoutMatchInput | MatchSpectatorUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: MatchSpectatorScalarWhereInput | MatchSpectatorScalarWhereInput[]
  }

  export type BetUncheckedUpdateManyWithoutMatchNestedInput = {
    create?: XOR<BetCreateWithoutMatchInput, BetUncheckedCreateWithoutMatchInput> | BetCreateWithoutMatchInput[] | BetUncheckedCreateWithoutMatchInput[]
    connectOrCreate?: BetCreateOrConnectWithoutMatchInput | BetCreateOrConnectWithoutMatchInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutMatchInput | BetUpsertWithWhereUniqueWithoutMatchInput[]
    createMany?: BetCreateManyMatchInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutMatchInput | BetUpdateWithWhereUniqueWithoutMatchInput[]
    updateMany?: BetUpdateManyWithWhereWithoutMatchInput | BetUpdateManyWithWhereWithoutMatchInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type MatchSettingUncheckedUpdateOneWithoutMatchNestedInput = {
    create?: XOR<MatchSettingCreateWithoutMatchInput, MatchSettingUncheckedCreateWithoutMatchInput>
    connectOrCreate?: MatchSettingCreateOrConnectWithoutMatchInput
    upsert?: MatchSettingUpsertWithoutMatchInput
    disconnect?: MatchSettingWhereInput | boolean
    delete?: MatchSettingWhereInput | boolean
    connect?: MatchSettingWhereUniqueInput
    update?: XOR<XOR<MatchSettingUpdateToOneWithWhereWithoutMatchInput, MatchSettingUpdateWithoutMatchInput>, MatchSettingUncheckedUpdateWithoutMatchInput>
  }

  export type InvitationUncheckedUpdateOneWithoutMatchNestedInput = {
    create?: XOR<InvitationCreateWithoutMatchInput, InvitationUncheckedCreateWithoutMatchInput>
    connectOrCreate?: InvitationCreateOrConnectWithoutMatchInput
    upsert?: InvitationUpsertWithoutMatchInput
    disconnect?: InvitationWhereInput | boolean
    delete?: InvitationWhereInput | boolean
    connect?: InvitationWhereUniqueInput
    update?: XOR<XOR<InvitationUpdateToOneWithWhereWithoutMatchInput, InvitationUpdateWithoutMatchInput>, InvitationUncheckedUpdateWithoutMatchInput>
  }

  export type MatchCreateNestedOneWithoutMatchSettingInput = {
    create?: XOR<MatchCreateWithoutMatchSettingInput, MatchUncheckedCreateWithoutMatchSettingInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchSettingInput
    connect?: MatchWhereUniqueInput
  }

  export type NullableEnumAIDifficultyFieldUpdateOperationsInput = {
    set?: $Enums.AIDifficulty | null
  }

  export type MatchUpdateOneRequiredWithoutMatchSettingNestedInput = {
    create?: XOR<MatchCreateWithoutMatchSettingInput, MatchUncheckedCreateWithoutMatchSettingInput>
    connectOrCreate?: MatchCreateOrConnectWithoutMatchSettingInput
    upsert?: MatchUpsertWithoutMatchSettingInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutMatchSettingInput, MatchUpdateWithoutMatchSettingInput>, MatchUncheckedUpdateWithoutMatchSettingInput>
  }

  export type MatchPlayerCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchPlayerCreateWithoutUserInput, MatchPlayerUncheckedCreateWithoutUserInput> | MatchPlayerCreateWithoutUserInput[] | MatchPlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutUserInput | MatchPlayerCreateOrConnectWithoutUserInput[]
    createMany?: MatchPlayerCreateManyUserInputEnvelope
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
  }

  export type MatchSpectatorCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchSpectatorCreateWithoutUserInput, MatchSpectatorUncheckedCreateWithoutUserInput> | MatchSpectatorCreateWithoutUserInput[] | MatchSpectatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchSpectatorCreateOrConnectWithoutUserInput | MatchSpectatorCreateOrConnectWithoutUserInput[]
    createMany?: MatchSpectatorCreateManyUserInputEnvelope
    connect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
  }

  export type BetCreateNestedManyWithoutUserInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutSenderInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type InvitationCreateNestedManyWithoutReceiverInput = {
    create?: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput> | InvitationCreateWithoutReceiverInput[] | InvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutReceiverInput | InvitationCreateOrConnectWithoutReceiverInput[]
    createMany?: InvitationCreateManyReceiverInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type MatchPlayerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchPlayerCreateWithoutUserInput, MatchPlayerUncheckedCreateWithoutUserInput> | MatchPlayerCreateWithoutUserInput[] | MatchPlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutUserInput | MatchPlayerCreateOrConnectWithoutUserInput[]
    createMany?: MatchPlayerCreateManyUserInputEnvelope
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
  }

  export type MatchSpectatorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MatchSpectatorCreateWithoutUserInput, MatchSpectatorUncheckedCreateWithoutUserInput> | MatchSpectatorCreateWithoutUserInput[] | MatchSpectatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchSpectatorCreateOrConnectWithoutUserInput | MatchSpectatorCreateOrConnectWithoutUserInput[]
    createMany?: MatchSpectatorCreateManyUserInputEnvelope
    connect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
  }

  export type BetUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type InvitationUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput> | InvitationCreateWithoutReceiverInput[] | InvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutReceiverInput | InvitationCreateOrConnectWithoutReceiverInput[]
    createMany?: InvitationCreateManyReceiverInputEnvelope
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
  }

  export type MatchPlayerUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchPlayerCreateWithoutUserInput, MatchPlayerUncheckedCreateWithoutUserInput> | MatchPlayerCreateWithoutUserInput[] | MatchPlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutUserInput | MatchPlayerCreateOrConnectWithoutUserInput[]
    upsert?: MatchPlayerUpsertWithWhereUniqueWithoutUserInput | MatchPlayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchPlayerCreateManyUserInputEnvelope
    set?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    disconnect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    delete?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    update?: MatchPlayerUpdateWithWhereUniqueWithoutUserInput | MatchPlayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchPlayerUpdateManyWithWhereWithoutUserInput | MatchPlayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchPlayerScalarWhereInput | MatchPlayerScalarWhereInput[]
  }

  export type MatchSpectatorUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchSpectatorCreateWithoutUserInput, MatchSpectatorUncheckedCreateWithoutUserInput> | MatchSpectatorCreateWithoutUserInput[] | MatchSpectatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchSpectatorCreateOrConnectWithoutUserInput | MatchSpectatorCreateOrConnectWithoutUserInput[]
    upsert?: MatchSpectatorUpsertWithWhereUniqueWithoutUserInput | MatchSpectatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchSpectatorCreateManyUserInputEnvelope
    set?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    disconnect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    delete?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    connect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    update?: MatchSpectatorUpdateWithWhereUniqueWithoutUserInput | MatchSpectatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchSpectatorUpdateManyWithWhereWithoutUserInput | MatchSpectatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchSpectatorScalarWhereInput | MatchSpectatorScalarWhereInput[]
  }

  export type BetUpdateManyWithoutUserNestedInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutUserInput | BetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutUserInput | BetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BetUpdateManyWithWhereWithoutUserInput | BetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutSenderNestedInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutSenderInput | InvitationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutSenderInput | InvitationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutSenderInput | InvitationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type InvitationUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput> | InvitationCreateWithoutReceiverInput[] | InvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutReceiverInput | InvitationCreateOrConnectWithoutReceiverInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutReceiverInput | InvitationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: InvitationCreateManyReceiverInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutReceiverInput | InvitationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutReceiverInput | InvitationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type MatchPlayerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchPlayerCreateWithoutUserInput, MatchPlayerUncheckedCreateWithoutUserInput> | MatchPlayerCreateWithoutUserInput[] | MatchPlayerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchPlayerCreateOrConnectWithoutUserInput | MatchPlayerCreateOrConnectWithoutUserInput[]
    upsert?: MatchPlayerUpsertWithWhereUniqueWithoutUserInput | MatchPlayerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchPlayerCreateManyUserInputEnvelope
    set?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    disconnect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    delete?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    connect?: MatchPlayerWhereUniqueInput | MatchPlayerWhereUniqueInput[]
    update?: MatchPlayerUpdateWithWhereUniqueWithoutUserInput | MatchPlayerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchPlayerUpdateManyWithWhereWithoutUserInput | MatchPlayerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchPlayerScalarWhereInput | MatchPlayerScalarWhereInput[]
  }

  export type MatchSpectatorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MatchSpectatorCreateWithoutUserInput, MatchSpectatorUncheckedCreateWithoutUserInput> | MatchSpectatorCreateWithoutUserInput[] | MatchSpectatorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MatchSpectatorCreateOrConnectWithoutUserInput | MatchSpectatorCreateOrConnectWithoutUserInput[]
    upsert?: MatchSpectatorUpsertWithWhereUniqueWithoutUserInput | MatchSpectatorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MatchSpectatorCreateManyUserInputEnvelope
    set?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    disconnect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    delete?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    connect?: MatchSpectatorWhereUniqueInput | MatchSpectatorWhereUniqueInput[]
    update?: MatchSpectatorUpdateWithWhereUniqueWithoutUserInput | MatchSpectatorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MatchSpectatorUpdateManyWithWhereWithoutUserInput | MatchSpectatorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MatchSpectatorScalarWhereInput | MatchSpectatorScalarWhereInput[]
  }

  export type BetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput> | BetCreateWithoutUserInput[] | BetUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BetCreateOrConnectWithoutUserInput | BetCreateOrConnectWithoutUserInput[]
    upsert?: BetUpsertWithWhereUniqueWithoutUserInput | BetUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BetCreateManyUserInputEnvelope
    set?: BetWhereUniqueInput | BetWhereUniqueInput[]
    disconnect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    delete?: BetWhereUniqueInput | BetWhereUniqueInput[]
    connect?: BetWhereUniqueInput | BetWhereUniqueInput[]
    update?: BetUpdateWithWhereUniqueWithoutUserInput | BetUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BetUpdateManyWithWhereWithoutUserInput | BetUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BetScalarWhereInput | BetScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput> | InvitationCreateWithoutSenderInput[] | InvitationUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutSenderInput | InvitationCreateOrConnectWithoutSenderInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutSenderInput | InvitationUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: InvitationCreateManySenderInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutSenderInput | InvitationUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutSenderInput | InvitationUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type InvitationUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput> | InvitationCreateWithoutReceiverInput[] | InvitationUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: InvitationCreateOrConnectWithoutReceiverInput | InvitationCreateOrConnectWithoutReceiverInput[]
    upsert?: InvitationUpsertWithWhereUniqueWithoutReceiverInput | InvitationUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: InvitationCreateManyReceiverInputEnvelope
    set?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    disconnect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    delete?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    connect?: InvitationWhereUniqueInput | InvitationWhereUniqueInput[]
    update?: InvitationUpdateWithWhereUniqueWithoutReceiverInput | InvitationUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: InvitationUpdateManyWithWhereWithoutReceiverInput | InvitationUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
  }

  export type MatchCreateNestedOneWithoutInvitationInput = {
    create?: XOR<MatchCreateWithoutInvitationInput, MatchUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: MatchCreateOrConnectWithoutInvitationInput
    connect?: MatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsSentInput = {
    create?: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsSentInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInvitationsReceivedInput = {
    create?: XOR<UserCreateWithoutInvitationsReceivedInput, UserUncheckedCreateWithoutInvitationsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type EnumInvitationStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvitationStatus
  }

  export type EnumInvitationTypeFieldUpdateOperationsInput = {
    set?: $Enums.InvitationType
  }

  export type MatchUpdateOneWithoutInvitationNestedInput = {
    create?: XOR<MatchCreateWithoutInvitationInput, MatchUncheckedCreateWithoutInvitationInput>
    connectOrCreate?: MatchCreateOrConnectWithoutInvitationInput
    upsert?: MatchUpsertWithoutInvitationInput
    disconnect?: MatchWhereInput | boolean
    delete?: MatchWhereInput | boolean
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutInvitationInput, MatchUpdateWithoutInvitationInput>, MatchUncheckedUpdateWithoutInvitationInput>
  }

  export type UserUpdateOneRequiredWithoutInvitationsSentNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsSentInput
    upsert?: UserUpsertWithoutInvitationsSentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsSentInput, UserUpdateWithoutInvitationsSentInput>, UserUncheckedUpdateWithoutInvitationsSentInput>
  }

  export type UserUpdateOneWithoutInvitationsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutInvitationsReceivedInput, UserUncheckedCreateWithoutInvitationsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutInvitationsReceivedInput
    upsert?: UserUpsertWithoutInvitationsReceivedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInvitationsReceivedInput, UserUpdateWithoutInvitationsReceivedInput>, UserUncheckedUpdateWithoutInvitationsReceivedInput>
  }

  export type UserCreateNestedOneWithoutBetsInput = {
    create?: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetsInput
    connect?: UserWhereUniqueInput
  }

  export type MatchCreateNestedOneWithoutBetsInput = {
    create?: XOR<MatchCreateWithoutBetsInput, MatchUncheckedCreateWithoutBetsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutBetsInput
    connect?: MatchWhereUniqueInput
  }

  export type EnumBetStatusFieldUpdateOperationsInput = {
    set?: $Enums.BetStatus
  }

  export type UserUpdateOneRequiredWithoutBetsNestedInput = {
    create?: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBetsInput
    upsert?: UserUpsertWithoutBetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBetsInput, UserUpdateWithoutBetsInput>, UserUncheckedUpdateWithoutBetsInput>
  }

  export type MatchUpdateOneRequiredWithoutBetsNestedInput = {
    create?: XOR<MatchCreateWithoutBetsInput, MatchUncheckedCreateWithoutBetsInput>
    connectOrCreate?: MatchCreateOrConnectWithoutBetsInput
    upsert?: MatchUpsertWithoutBetsInput
    connect?: MatchWhereUniqueInput
    update?: XOR<XOR<MatchUpdateToOneWithWhereWithoutBetsInput, MatchUpdateWithoutBetsInput>, MatchUncheckedUpdateWithoutBetsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumGameModeFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[]
    notIn?: $Enums.GameMode[]
    not?: NestedEnumGameModeFilter<$PrismaModel> | $Enums.GameMode
  }

  export type NestedEnumGameStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[]
    notIn?: $Enums.GameStatus[]
    not?: NestedEnumGameStatusFilter<$PrismaModel> | $Enums.GameStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumGameModeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameMode | EnumGameModeFieldRefInput<$PrismaModel>
    in?: $Enums.GameMode[]
    notIn?: $Enums.GameMode[]
    not?: NestedEnumGameModeWithAggregatesFilter<$PrismaModel> | $Enums.GameMode
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameModeFilter<$PrismaModel>
    _max?: NestedEnumGameModeFilter<$PrismaModel>
  }

  export type NestedEnumGameStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GameStatus | EnumGameStatusFieldRefInput<$PrismaModel>
    in?: $Enums.GameStatus[]
    notIn?: $Enums.GameStatus[]
    not?: NestedEnumGameStatusWithAggregatesFilter<$PrismaModel> | $Enums.GameStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGameStatusFilter<$PrismaModel>
    _max?: NestedEnumGameStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAIDifficultyNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AIDifficulty | EnumAIDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIDifficulty[] | null
    notIn?: $Enums.AIDifficulty[] | null
    not?: NestedEnumAIDifficultyNullableFilter<$PrismaModel> | $Enums.AIDifficulty | null
  }

  export type NestedEnumAIDifficultyNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AIDifficulty | EnumAIDifficultyFieldRefInput<$PrismaModel> | null
    in?: $Enums.AIDifficulty[] | null
    notIn?: $Enums.AIDifficulty[] | null
    not?: NestedEnumAIDifficultyNullableWithAggregatesFilter<$PrismaModel> | $Enums.AIDifficulty | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAIDifficultyNullableFilter<$PrismaModel>
    _max?: NestedEnumAIDifficultyNullableFilter<$PrismaModel>
  }

  export type NestedEnumInvitationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[]
    notIn?: $Enums.InvitationStatus[]
    not?: NestedEnumInvitationStatusFilter<$PrismaModel> | $Enums.InvitationStatus
  }

  export type NestedEnumInvitationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationType | EnumInvitationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationType[]
    notIn?: $Enums.InvitationType[]
    not?: NestedEnumInvitationTypeFilter<$PrismaModel> | $Enums.InvitationType
  }

  export type NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationStatus | EnumInvitationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationStatus[]
    notIn?: $Enums.InvitationStatus[]
    not?: NestedEnumInvitationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvitationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationStatusFilter<$PrismaModel>
    _max?: NestedEnumInvitationStatusFilter<$PrismaModel>
  }

  export type NestedEnumInvitationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvitationType | EnumInvitationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InvitationType[]
    notIn?: $Enums.InvitationType[]
    not?: NestedEnumInvitationTypeWithAggregatesFilter<$PrismaModel> | $Enums.InvitationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvitationTypeFilter<$PrismaModel>
    _max?: NestedEnumInvitationTypeFilter<$PrismaModel>
  }

  export type NestedEnumBetStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BetStatus | EnumBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BetStatus[]
    notIn?: $Enums.BetStatus[]
    not?: NestedEnumBetStatusFilter<$PrismaModel> | $Enums.BetStatus
  }

  export type NestedEnumBetStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BetStatus | EnumBetStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BetStatus[]
    notIn?: $Enums.BetStatus[]
    not?: NestedEnumBetStatusWithAggregatesFilter<$PrismaModel> | $Enums.BetStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBetStatusFilter<$PrismaModel>
    _max?: NestedEnumBetStatusFilter<$PrismaModel>
  }

  export type MatchCreateWithoutSpectatorsInput = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1: MatchPlayerCreateNestedOneWithoutMatchAsOpponent1Input
    opponent2?: MatchPlayerCreateNestedOneWithoutMatchAsOpponent2Input
    bets?: BetCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingCreateNestedOneWithoutMatchInput
    invitation?: InvitationCreateNestedOneWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutSpectatorsInput = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1Id: string
    opponent2Id?: string | null
    bets?: BetUncheckedCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingUncheckedCreateNestedOneWithoutMatchInput
    invitation?: InvitationUncheckedCreateNestedOneWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutSpectatorsInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutSpectatorsInput, MatchUncheckedCreateWithoutSpectatorsInput>
  }

  export type UserCreateWithoutMatchSpectatorsInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchPlayers?: MatchPlayerCreateNestedManyWithoutUserInput
    bets?: BetCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutSenderInput
    invitationsReceived?: InvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMatchSpectatorsInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchPlayers?: MatchPlayerUncheckedCreateNestedManyWithoutUserInput
    bets?: BetUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    invitationsReceived?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMatchSpectatorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchSpectatorsInput, UserUncheckedCreateWithoutMatchSpectatorsInput>
  }

  export type MatchUpsertWithoutSpectatorsInput = {
    update: XOR<MatchUpdateWithoutSpectatorsInput, MatchUncheckedUpdateWithoutSpectatorsInput>
    create: XOR<MatchCreateWithoutSpectatorsInput, MatchUncheckedCreateWithoutSpectatorsInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutSpectatorsInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutSpectatorsInput, MatchUncheckedUpdateWithoutSpectatorsInput>
  }

  export type MatchUpdateWithoutSpectatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1?: MatchPlayerUpdateOneRequiredWithoutMatchAsOpponent1NestedInput
    opponent2?: MatchPlayerUpdateOneWithoutMatchAsOpponent2NestedInput
    bets?: BetUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUpdateOneWithoutMatchNestedInput
    invitation?: InvitationUpdateOneWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutSpectatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1Id?: StringFieldUpdateOperationsInput | string
    opponent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    bets?: BetUncheckedUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUncheckedUpdateOneWithoutMatchNestedInput
    invitation?: InvitationUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type UserUpsertWithoutMatchSpectatorsInput = {
    update: XOR<UserUpdateWithoutMatchSpectatorsInput, UserUncheckedUpdateWithoutMatchSpectatorsInput>
    create: XOR<UserCreateWithoutMatchSpectatorsInput, UserUncheckedCreateWithoutMatchSpectatorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchSpectatorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchSpectatorsInput, UserUncheckedUpdateWithoutMatchSpectatorsInput>
  }

  export type UserUpdateWithoutMatchSpectatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPlayers?: MatchPlayerUpdateManyWithoutUserNestedInput
    bets?: BetUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutSenderNestedInput
    invitationsReceived?: InvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchSpectatorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPlayers?: MatchPlayerUncheckedUpdateManyWithoutUserNestedInput
    bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    invitationsReceived?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type MatchCreateWithoutOpponent1Input = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent2?: MatchPlayerCreateNestedOneWithoutMatchAsOpponent2Input
    spectators?: MatchSpectatorCreateNestedManyWithoutMatchInput
    bets?: BetCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingCreateNestedOneWithoutMatchInput
    invitation?: InvitationCreateNestedOneWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutOpponent1Input = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent2Id?: string | null
    spectators?: MatchSpectatorUncheckedCreateNestedManyWithoutMatchInput
    bets?: BetUncheckedCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingUncheckedCreateNestedOneWithoutMatchInput
    invitation?: InvitationUncheckedCreateNestedOneWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutOpponent1Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutOpponent1Input, MatchUncheckedCreateWithoutOpponent1Input>
  }

  export type MatchCreateWithoutOpponent2Input = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1: MatchPlayerCreateNestedOneWithoutMatchAsOpponent1Input
    spectators?: MatchSpectatorCreateNestedManyWithoutMatchInput
    bets?: BetCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingCreateNestedOneWithoutMatchInput
    invitation?: InvitationCreateNestedOneWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutOpponent2Input = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1Id: string
    spectators?: MatchSpectatorUncheckedCreateNestedManyWithoutMatchInput
    bets?: BetUncheckedCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingUncheckedCreateNestedOneWithoutMatchInput
    invitation?: InvitationUncheckedCreateNestedOneWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutOpponent2Input = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutOpponent2Input, MatchUncheckedCreateWithoutOpponent2Input>
  }

  export type UserCreateWithoutMatchPlayersInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchSpectators?: MatchSpectatorCreateNestedManyWithoutUserInput
    bets?: BetCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutSenderInput
    invitationsReceived?: InvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMatchPlayersInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchSpectators?: MatchSpectatorUncheckedCreateNestedManyWithoutUserInput
    bets?: BetUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    invitationsReceived?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMatchPlayersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMatchPlayersInput, UserUncheckedCreateWithoutMatchPlayersInput>
  }

  export type MatchUpsertWithoutOpponent1Input = {
    update: XOR<MatchUpdateWithoutOpponent1Input, MatchUncheckedUpdateWithoutOpponent1Input>
    create: XOR<MatchCreateWithoutOpponent1Input, MatchUncheckedCreateWithoutOpponent1Input>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutOpponent1Input = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutOpponent1Input, MatchUncheckedUpdateWithoutOpponent1Input>
  }

  export type MatchUpdateWithoutOpponent1Input = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent2?: MatchPlayerUpdateOneWithoutMatchAsOpponent2NestedInput
    spectators?: MatchSpectatorUpdateManyWithoutMatchNestedInput
    bets?: BetUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUpdateOneWithoutMatchNestedInput
    invitation?: InvitationUpdateOneWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutOpponent1Input = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    spectators?: MatchSpectatorUncheckedUpdateManyWithoutMatchNestedInput
    bets?: BetUncheckedUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUncheckedUpdateOneWithoutMatchNestedInput
    invitation?: InvitationUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type MatchUpsertWithoutOpponent2Input = {
    update: XOR<MatchUpdateWithoutOpponent2Input, MatchUncheckedUpdateWithoutOpponent2Input>
    create: XOR<MatchCreateWithoutOpponent2Input, MatchUncheckedCreateWithoutOpponent2Input>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutOpponent2Input = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutOpponent2Input, MatchUncheckedUpdateWithoutOpponent2Input>
  }

  export type MatchUpdateWithoutOpponent2Input = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1?: MatchPlayerUpdateOneRequiredWithoutMatchAsOpponent1NestedInput
    spectators?: MatchSpectatorUpdateManyWithoutMatchNestedInput
    bets?: BetUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUpdateOneWithoutMatchNestedInput
    invitation?: InvitationUpdateOneWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutOpponent2Input = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1Id?: StringFieldUpdateOperationsInput | string
    spectators?: MatchSpectatorUncheckedUpdateManyWithoutMatchNestedInput
    bets?: BetUncheckedUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUncheckedUpdateOneWithoutMatchNestedInput
    invitation?: InvitationUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type UserUpsertWithoutMatchPlayersInput = {
    update: XOR<UserUpdateWithoutMatchPlayersInput, UserUncheckedUpdateWithoutMatchPlayersInput>
    create: XOR<UserCreateWithoutMatchPlayersInput, UserUncheckedCreateWithoutMatchPlayersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMatchPlayersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMatchPlayersInput, UserUncheckedUpdateWithoutMatchPlayersInput>
  }

  export type UserUpdateWithoutMatchPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchSpectators?: MatchSpectatorUpdateManyWithoutUserNestedInput
    bets?: BetUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutSenderNestedInput
    invitationsReceived?: InvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMatchPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchSpectators?: MatchSpectatorUncheckedUpdateManyWithoutUserNestedInput
    bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    invitationsReceived?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type MatchPlayerCreateWithoutMatchAsOpponent1Input = {
    id?: string
    username: string
    avatarUrl?: string | null
    isAI?: boolean
    finalScore?: number
    isReady?: boolean
    isHost?: boolean
    characterId: string
    paddleId: string
    rankTier: string
    rankDivision: string
    rankChange?: number | null
    matchAsOpponent2?: MatchCreateNestedOneWithoutOpponent2Input
    User?: UserCreateNestedOneWithoutMatchPlayersInput
  }

  export type MatchPlayerUncheckedCreateWithoutMatchAsOpponent1Input = {
    id?: string
    userId?: string | null
    username: string
    avatarUrl?: string | null
    isAI?: boolean
    finalScore?: number
    isReady?: boolean
    isHost?: boolean
    characterId: string
    paddleId: string
    rankTier: string
    rankDivision: string
    rankChange?: number | null
    matchAsOpponent2?: MatchUncheckedCreateNestedOneWithoutOpponent2Input
  }

  export type MatchPlayerCreateOrConnectWithoutMatchAsOpponent1Input = {
    where: MatchPlayerWhereUniqueInput
    create: XOR<MatchPlayerCreateWithoutMatchAsOpponent1Input, MatchPlayerUncheckedCreateWithoutMatchAsOpponent1Input>
  }

  export type MatchPlayerCreateWithoutMatchAsOpponent2Input = {
    id?: string
    username: string
    avatarUrl?: string | null
    isAI?: boolean
    finalScore?: number
    isReady?: boolean
    isHost?: boolean
    characterId: string
    paddleId: string
    rankTier: string
    rankDivision: string
    rankChange?: number | null
    matchAsOpponent1?: MatchCreateNestedOneWithoutOpponent1Input
    User?: UserCreateNestedOneWithoutMatchPlayersInput
  }

  export type MatchPlayerUncheckedCreateWithoutMatchAsOpponent2Input = {
    id?: string
    userId?: string | null
    username: string
    avatarUrl?: string | null
    isAI?: boolean
    finalScore?: number
    isReady?: boolean
    isHost?: boolean
    characterId: string
    paddleId: string
    rankTier: string
    rankDivision: string
    rankChange?: number | null
    matchAsOpponent1?: MatchUncheckedCreateNestedOneWithoutOpponent1Input
  }

  export type MatchPlayerCreateOrConnectWithoutMatchAsOpponent2Input = {
    where: MatchPlayerWhereUniqueInput
    create: XOR<MatchPlayerCreateWithoutMatchAsOpponent2Input, MatchPlayerUncheckedCreateWithoutMatchAsOpponent2Input>
  }

  export type MatchSpectatorCreateWithoutMatchInput = {
    id?: string
    username: string
    user: UserCreateNestedOneWithoutMatchSpectatorsInput
  }

  export type MatchSpectatorUncheckedCreateWithoutMatchInput = {
    id?: string
    userId: string
    username: string
  }

  export type MatchSpectatorCreateOrConnectWithoutMatchInput = {
    where: MatchSpectatorWhereUniqueInput
    create: XOR<MatchSpectatorCreateWithoutMatchInput, MatchSpectatorUncheckedCreateWithoutMatchInput>
  }

  export type MatchSpectatorCreateManyMatchInputEnvelope = {
    data: MatchSpectatorCreateManyMatchInput | MatchSpectatorCreateManyMatchInput[]
  }

  export type BetCreateWithoutMatchInput = {
    id?: string
    amount: number
    predictedWinnerId?: string | null
    status?: $Enums.BetStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    user: UserCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateWithoutMatchInput = {
    id?: string
    amount: number
    predictedWinnerId?: string | null
    status?: $Enums.BetStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    userId: string
  }

  export type BetCreateOrConnectWithoutMatchInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutMatchInput, BetUncheckedCreateWithoutMatchInput>
  }

  export type BetCreateManyMatchInputEnvelope = {
    data: BetCreateManyMatchInput | BetCreateManyMatchInput[]
  }

  export type MatchSettingCreateWithoutMatchInput = {
    id?: string
    scoreLimit: number
    pauseTime: number
    allowPowerUps?: boolean
    aiDifficulty?: $Enums.AIDifficulty | null
    createdAt?: Date | string
    requiredCurrency: number
  }

  export type MatchSettingUncheckedCreateWithoutMatchInput = {
    id?: string
    scoreLimit: number
    pauseTime: number
    allowPowerUps?: boolean
    aiDifficulty?: $Enums.AIDifficulty | null
    createdAt?: Date | string
    requiredCurrency: number
  }

  export type MatchSettingCreateOrConnectWithoutMatchInput = {
    where: MatchSettingWhereUniqueInput
    create: XOR<MatchSettingCreateWithoutMatchInput, MatchSettingUncheckedCreateWithoutMatchInput>
  }

  export type InvitationCreateWithoutMatchInput = {
    id?: string
    status?: $Enums.InvitationStatus
    type?: $Enums.InvitationType
    createdAt?: Date | string
    updatedAt?: Date | string
    inviteCode: string
    expiresAt?: Date | string | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency?: number
    message?: string | null
    sender: UserCreateNestedOneWithoutInvitationsSentInput
    receiver?: UserCreateNestedOneWithoutInvitationsReceivedInput
  }

  export type InvitationUncheckedCreateWithoutMatchInput = {
    id?: string
    senderId: string
    receiverId?: string | null
    status?: $Enums.InvitationStatus
    type?: $Enums.InvitationType
    createdAt?: Date | string
    updatedAt?: Date | string
    inviteCode: string
    expiresAt?: Date | string | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency?: number
    message?: string | null
  }

  export type InvitationCreateOrConnectWithoutMatchInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutMatchInput, InvitationUncheckedCreateWithoutMatchInput>
  }

  export type MatchPlayerUpsertWithoutMatchAsOpponent1Input = {
    update: XOR<MatchPlayerUpdateWithoutMatchAsOpponent1Input, MatchPlayerUncheckedUpdateWithoutMatchAsOpponent1Input>
    create: XOR<MatchPlayerCreateWithoutMatchAsOpponent1Input, MatchPlayerUncheckedCreateWithoutMatchAsOpponent1Input>
    where?: MatchPlayerWhereInput
  }

  export type MatchPlayerUpdateToOneWithWhereWithoutMatchAsOpponent1Input = {
    where?: MatchPlayerWhereInput
    data: XOR<MatchPlayerUpdateWithoutMatchAsOpponent1Input, MatchPlayerUncheckedUpdateWithoutMatchAsOpponent1Input>
  }

  export type MatchPlayerUpdateWithoutMatchAsOpponent1Input = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    finalScore?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isHost?: BoolFieldUpdateOperationsInput | boolean
    characterId?: StringFieldUpdateOperationsInput | string
    paddleId?: StringFieldUpdateOperationsInput | string
    rankTier?: StringFieldUpdateOperationsInput | string
    rankDivision?: StringFieldUpdateOperationsInput | string
    rankChange?: NullableIntFieldUpdateOperationsInput | number | null
    matchAsOpponent2?: MatchUpdateOneWithoutOpponent2NestedInput
    User?: UserUpdateOneWithoutMatchPlayersNestedInput
  }

  export type MatchPlayerUncheckedUpdateWithoutMatchAsOpponent1Input = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    finalScore?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isHost?: BoolFieldUpdateOperationsInput | boolean
    characterId?: StringFieldUpdateOperationsInput | string
    paddleId?: StringFieldUpdateOperationsInput | string
    rankTier?: StringFieldUpdateOperationsInput | string
    rankDivision?: StringFieldUpdateOperationsInput | string
    rankChange?: NullableIntFieldUpdateOperationsInput | number | null
    matchAsOpponent2?: MatchUncheckedUpdateOneWithoutOpponent2NestedInput
  }

  export type MatchPlayerUpsertWithoutMatchAsOpponent2Input = {
    update: XOR<MatchPlayerUpdateWithoutMatchAsOpponent2Input, MatchPlayerUncheckedUpdateWithoutMatchAsOpponent2Input>
    create: XOR<MatchPlayerCreateWithoutMatchAsOpponent2Input, MatchPlayerUncheckedCreateWithoutMatchAsOpponent2Input>
    where?: MatchPlayerWhereInput
  }

  export type MatchPlayerUpdateToOneWithWhereWithoutMatchAsOpponent2Input = {
    where?: MatchPlayerWhereInput
    data: XOR<MatchPlayerUpdateWithoutMatchAsOpponent2Input, MatchPlayerUncheckedUpdateWithoutMatchAsOpponent2Input>
  }

  export type MatchPlayerUpdateWithoutMatchAsOpponent2Input = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    finalScore?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isHost?: BoolFieldUpdateOperationsInput | boolean
    characterId?: StringFieldUpdateOperationsInput | string
    paddleId?: StringFieldUpdateOperationsInput | string
    rankTier?: StringFieldUpdateOperationsInput | string
    rankDivision?: StringFieldUpdateOperationsInput | string
    rankChange?: NullableIntFieldUpdateOperationsInput | number | null
    matchAsOpponent1?: MatchUpdateOneWithoutOpponent1NestedInput
    User?: UserUpdateOneWithoutMatchPlayersNestedInput
  }

  export type MatchPlayerUncheckedUpdateWithoutMatchAsOpponent2Input = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    finalScore?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isHost?: BoolFieldUpdateOperationsInput | boolean
    characterId?: StringFieldUpdateOperationsInput | string
    paddleId?: StringFieldUpdateOperationsInput | string
    rankTier?: StringFieldUpdateOperationsInput | string
    rankDivision?: StringFieldUpdateOperationsInput | string
    rankChange?: NullableIntFieldUpdateOperationsInput | number | null
    matchAsOpponent1?: MatchUncheckedUpdateOneWithoutOpponent1NestedInput
  }

  export type MatchSpectatorUpsertWithWhereUniqueWithoutMatchInput = {
    where: MatchSpectatorWhereUniqueInput
    update: XOR<MatchSpectatorUpdateWithoutMatchInput, MatchSpectatorUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchSpectatorCreateWithoutMatchInput, MatchSpectatorUncheckedCreateWithoutMatchInput>
  }

  export type MatchSpectatorUpdateWithWhereUniqueWithoutMatchInput = {
    where: MatchSpectatorWhereUniqueInput
    data: XOR<MatchSpectatorUpdateWithoutMatchInput, MatchSpectatorUncheckedUpdateWithoutMatchInput>
  }

  export type MatchSpectatorUpdateManyWithWhereWithoutMatchInput = {
    where: MatchSpectatorScalarWhereInput
    data: XOR<MatchSpectatorUpdateManyMutationInput, MatchSpectatorUncheckedUpdateManyWithoutMatchInput>
  }

  export type MatchSpectatorScalarWhereInput = {
    AND?: MatchSpectatorScalarWhereInput | MatchSpectatorScalarWhereInput[]
    OR?: MatchSpectatorScalarWhereInput[]
    NOT?: MatchSpectatorScalarWhereInput | MatchSpectatorScalarWhereInput[]
    id?: StringFilter<"MatchSpectator"> | string
    userId?: StringFilter<"MatchSpectator"> | string
    username?: StringFilter<"MatchSpectator"> | string
    matchId?: StringFilter<"MatchSpectator"> | string
  }

  export type BetUpsertWithWhereUniqueWithoutMatchInput = {
    where: BetWhereUniqueInput
    update: XOR<BetUpdateWithoutMatchInput, BetUncheckedUpdateWithoutMatchInput>
    create: XOR<BetCreateWithoutMatchInput, BetUncheckedCreateWithoutMatchInput>
  }

  export type BetUpdateWithWhereUniqueWithoutMatchInput = {
    where: BetWhereUniqueInput
    data: XOR<BetUpdateWithoutMatchInput, BetUncheckedUpdateWithoutMatchInput>
  }

  export type BetUpdateManyWithWhereWithoutMatchInput = {
    where: BetScalarWhereInput
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyWithoutMatchInput>
  }

  export type BetScalarWhereInput = {
    AND?: BetScalarWhereInput | BetScalarWhereInput[]
    OR?: BetScalarWhereInput[]
    NOT?: BetScalarWhereInput | BetScalarWhereInput[]
    id?: StringFilter<"Bet"> | string
    amount?: IntFilter<"Bet"> | number
    predictedWinnerId?: StringNullableFilter<"Bet"> | string | null
    status?: EnumBetStatusFilter<"Bet"> | $Enums.BetStatus
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Bet"> | Date | string | null
    userId?: StringFilter<"Bet"> | string
    matchId?: StringFilter<"Bet"> | string
  }

  export type MatchSettingUpsertWithoutMatchInput = {
    update: XOR<MatchSettingUpdateWithoutMatchInput, MatchSettingUncheckedUpdateWithoutMatchInput>
    create: XOR<MatchSettingCreateWithoutMatchInput, MatchSettingUncheckedCreateWithoutMatchInput>
    where?: MatchSettingWhereInput
  }

  export type MatchSettingUpdateToOneWithWhereWithoutMatchInput = {
    where?: MatchSettingWhereInput
    data: XOR<MatchSettingUpdateWithoutMatchInput, MatchSettingUncheckedUpdateWithoutMatchInput>
  }

  export type MatchSettingUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    aiDifficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredCurrency?: IntFieldUpdateOperationsInput | number
  }

  export type MatchSettingUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    aiDifficulty?: NullableEnumAIDifficultyFieldUpdateOperationsInput | $Enums.AIDifficulty | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    requiredCurrency?: IntFieldUpdateOperationsInput | number
  }

  export type InvitationUpsertWithoutMatchInput = {
    update: XOR<InvitationUpdateWithoutMatchInput, InvitationUncheckedUpdateWithoutMatchInput>
    create: XOR<InvitationCreateWithoutMatchInput, InvitationUncheckedCreateWithoutMatchInput>
    where?: InvitationWhereInput
  }

  export type InvitationUpdateToOneWithWhereWithoutMatchInput = {
    where?: InvitationWhereInput
    data: XOR<InvitationUpdateWithoutMatchInput, InvitationUncheckedUpdateWithoutMatchInput>
  }

  export type InvitationUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    sender?: UserUpdateOneRequiredWithoutInvitationsSentNestedInput
    receiver?: UserUpdateOneWithoutInvitationsReceivedNestedInput
  }

  export type InvitationUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MatchCreateWithoutMatchSettingInput = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1: MatchPlayerCreateNestedOneWithoutMatchAsOpponent1Input
    opponent2?: MatchPlayerCreateNestedOneWithoutMatchAsOpponent2Input
    spectators?: MatchSpectatorCreateNestedManyWithoutMatchInput
    bets?: BetCreateNestedManyWithoutMatchInput
    invitation?: InvitationCreateNestedOneWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutMatchSettingInput = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1Id: string
    opponent2Id?: string | null
    spectators?: MatchSpectatorUncheckedCreateNestedManyWithoutMatchInput
    bets?: BetUncheckedCreateNestedManyWithoutMatchInput
    invitation?: InvitationUncheckedCreateNestedOneWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutMatchSettingInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutMatchSettingInput, MatchUncheckedCreateWithoutMatchSettingInput>
  }

  export type MatchUpsertWithoutMatchSettingInput = {
    update: XOR<MatchUpdateWithoutMatchSettingInput, MatchUncheckedUpdateWithoutMatchSettingInput>
    create: XOR<MatchCreateWithoutMatchSettingInput, MatchUncheckedCreateWithoutMatchSettingInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutMatchSettingInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutMatchSettingInput, MatchUncheckedUpdateWithoutMatchSettingInput>
  }

  export type MatchUpdateWithoutMatchSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1?: MatchPlayerUpdateOneRequiredWithoutMatchAsOpponent1NestedInput
    opponent2?: MatchPlayerUpdateOneWithoutMatchAsOpponent2NestedInput
    spectators?: MatchSpectatorUpdateManyWithoutMatchNestedInput
    bets?: BetUpdateManyWithoutMatchNestedInput
    invitation?: InvitationUpdateOneWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutMatchSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1Id?: StringFieldUpdateOperationsInput | string
    opponent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    spectators?: MatchSpectatorUncheckedUpdateManyWithoutMatchNestedInput
    bets?: BetUncheckedUpdateManyWithoutMatchNestedInput
    invitation?: InvitationUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type MatchPlayerCreateWithoutUserInput = {
    id?: string
    username: string
    avatarUrl?: string | null
    isAI?: boolean
    finalScore?: number
    isReady?: boolean
    isHost?: boolean
    characterId: string
    paddleId: string
    rankTier: string
    rankDivision: string
    rankChange?: number | null
    matchAsOpponent1?: MatchCreateNestedOneWithoutOpponent1Input
    matchAsOpponent2?: MatchCreateNestedOneWithoutOpponent2Input
  }

  export type MatchPlayerUncheckedCreateWithoutUserInput = {
    id?: string
    username: string
    avatarUrl?: string | null
    isAI?: boolean
    finalScore?: number
    isReady?: boolean
    isHost?: boolean
    characterId: string
    paddleId: string
    rankTier: string
    rankDivision: string
    rankChange?: number | null
    matchAsOpponent1?: MatchUncheckedCreateNestedOneWithoutOpponent1Input
    matchAsOpponent2?: MatchUncheckedCreateNestedOneWithoutOpponent2Input
  }

  export type MatchPlayerCreateOrConnectWithoutUserInput = {
    where: MatchPlayerWhereUniqueInput
    create: XOR<MatchPlayerCreateWithoutUserInput, MatchPlayerUncheckedCreateWithoutUserInput>
  }

  export type MatchPlayerCreateManyUserInputEnvelope = {
    data: MatchPlayerCreateManyUserInput | MatchPlayerCreateManyUserInput[]
  }

  export type MatchSpectatorCreateWithoutUserInput = {
    id?: string
    username: string
    match: MatchCreateNestedOneWithoutSpectatorsInput
  }

  export type MatchSpectatorUncheckedCreateWithoutUserInput = {
    id?: string
    username: string
    matchId: string
  }

  export type MatchSpectatorCreateOrConnectWithoutUserInput = {
    where: MatchSpectatorWhereUniqueInput
    create: XOR<MatchSpectatorCreateWithoutUserInput, MatchSpectatorUncheckedCreateWithoutUserInput>
  }

  export type MatchSpectatorCreateManyUserInputEnvelope = {
    data: MatchSpectatorCreateManyUserInput | MatchSpectatorCreateManyUserInput[]
  }

  export type BetCreateWithoutUserInput = {
    id?: string
    amount: number
    predictedWinnerId?: string | null
    status?: $Enums.BetStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    match: MatchCreateNestedOneWithoutBetsInput
  }

  export type BetUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    predictedWinnerId?: string | null
    status?: $Enums.BetStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    matchId: string
  }

  export type BetCreateOrConnectWithoutUserInput = {
    where: BetWhereUniqueInput
    create: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput>
  }

  export type BetCreateManyUserInputEnvelope = {
    data: BetCreateManyUserInput | BetCreateManyUserInput[]
  }

  export type InvitationCreateWithoutSenderInput = {
    id?: string
    status?: $Enums.InvitationStatus
    type?: $Enums.InvitationType
    createdAt?: Date | string
    updatedAt?: Date | string
    inviteCode: string
    expiresAt?: Date | string | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency?: number
    message?: string | null
    match?: MatchCreateNestedOneWithoutInvitationInput
    receiver?: UserCreateNestedOneWithoutInvitationsReceivedInput
  }

  export type InvitationUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId?: string | null
    status?: $Enums.InvitationStatus
    type?: $Enums.InvitationType
    createdAt?: Date | string
    updatedAt?: Date | string
    inviteCode: string
    expiresAt?: Date | string | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency?: number
    message?: string | null
    matchId?: string | null
  }

  export type InvitationCreateOrConnectWithoutSenderInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput>
  }

  export type InvitationCreateManySenderInputEnvelope = {
    data: InvitationCreateManySenderInput | InvitationCreateManySenderInput[]
  }

  export type InvitationCreateWithoutReceiverInput = {
    id?: string
    status?: $Enums.InvitationStatus
    type?: $Enums.InvitationType
    createdAt?: Date | string
    updatedAt?: Date | string
    inviteCode: string
    expiresAt?: Date | string | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency?: number
    message?: string | null
    match?: MatchCreateNestedOneWithoutInvitationInput
    sender: UserCreateNestedOneWithoutInvitationsSentInput
  }

  export type InvitationUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    status?: $Enums.InvitationStatus
    type?: $Enums.InvitationType
    createdAt?: Date | string
    updatedAt?: Date | string
    inviteCode: string
    expiresAt?: Date | string | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency?: number
    message?: string | null
    matchId?: string | null
  }

  export type InvitationCreateOrConnectWithoutReceiverInput = {
    where: InvitationWhereUniqueInput
    create: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput>
  }

  export type InvitationCreateManyReceiverInputEnvelope = {
    data: InvitationCreateManyReceiverInput | InvitationCreateManyReceiverInput[]
  }

  export type MatchPlayerUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchPlayerWhereUniqueInput
    update: XOR<MatchPlayerUpdateWithoutUserInput, MatchPlayerUncheckedUpdateWithoutUserInput>
    create: XOR<MatchPlayerCreateWithoutUserInput, MatchPlayerUncheckedCreateWithoutUserInput>
  }

  export type MatchPlayerUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchPlayerWhereUniqueInput
    data: XOR<MatchPlayerUpdateWithoutUserInput, MatchPlayerUncheckedUpdateWithoutUserInput>
  }

  export type MatchPlayerUpdateManyWithWhereWithoutUserInput = {
    where: MatchPlayerScalarWhereInput
    data: XOR<MatchPlayerUpdateManyMutationInput, MatchPlayerUncheckedUpdateManyWithoutUserInput>
  }

  export type MatchPlayerScalarWhereInput = {
    AND?: MatchPlayerScalarWhereInput | MatchPlayerScalarWhereInput[]
    OR?: MatchPlayerScalarWhereInput[]
    NOT?: MatchPlayerScalarWhereInput | MatchPlayerScalarWhereInput[]
    id?: StringFilter<"MatchPlayer"> | string
    userId?: StringNullableFilter<"MatchPlayer"> | string | null
    username?: StringFilter<"MatchPlayer"> | string
    avatarUrl?: StringNullableFilter<"MatchPlayer"> | string | null
    isAI?: BoolFilter<"MatchPlayer"> | boolean
    finalScore?: IntFilter<"MatchPlayer"> | number
    isReady?: BoolFilter<"MatchPlayer"> | boolean
    isHost?: BoolFilter<"MatchPlayer"> | boolean
    characterId?: StringFilter<"MatchPlayer"> | string
    paddleId?: StringFilter<"MatchPlayer"> | string
    rankTier?: StringFilter<"MatchPlayer"> | string
    rankDivision?: StringFilter<"MatchPlayer"> | string
    rankChange?: IntNullableFilter<"MatchPlayer"> | number | null
  }

  export type MatchSpectatorUpsertWithWhereUniqueWithoutUserInput = {
    where: MatchSpectatorWhereUniqueInput
    update: XOR<MatchSpectatorUpdateWithoutUserInput, MatchSpectatorUncheckedUpdateWithoutUserInput>
    create: XOR<MatchSpectatorCreateWithoutUserInput, MatchSpectatorUncheckedCreateWithoutUserInput>
  }

  export type MatchSpectatorUpdateWithWhereUniqueWithoutUserInput = {
    where: MatchSpectatorWhereUniqueInput
    data: XOR<MatchSpectatorUpdateWithoutUserInput, MatchSpectatorUncheckedUpdateWithoutUserInput>
  }

  export type MatchSpectatorUpdateManyWithWhereWithoutUserInput = {
    where: MatchSpectatorScalarWhereInput
    data: XOR<MatchSpectatorUpdateManyMutationInput, MatchSpectatorUncheckedUpdateManyWithoutUserInput>
  }

  export type BetUpsertWithWhereUniqueWithoutUserInput = {
    where: BetWhereUniqueInput
    update: XOR<BetUpdateWithoutUserInput, BetUncheckedUpdateWithoutUserInput>
    create: XOR<BetCreateWithoutUserInput, BetUncheckedCreateWithoutUserInput>
  }

  export type BetUpdateWithWhereUniqueWithoutUserInput = {
    where: BetWhereUniqueInput
    data: XOR<BetUpdateWithoutUserInput, BetUncheckedUpdateWithoutUserInput>
  }

  export type BetUpdateManyWithWhereWithoutUserInput = {
    where: BetScalarWhereInput
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyWithoutUserInput>
  }

  export type InvitationUpsertWithWhereUniqueWithoutSenderInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutSenderInput, InvitationUncheckedUpdateWithoutSenderInput>
    create: XOR<InvitationCreateWithoutSenderInput, InvitationUncheckedCreateWithoutSenderInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutSenderInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutSenderInput, InvitationUncheckedUpdateWithoutSenderInput>
  }

  export type InvitationUpdateManyWithWhereWithoutSenderInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutSenderInput>
  }

  export type InvitationScalarWhereInput = {
    AND?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    OR?: InvitationScalarWhereInput[]
    NOT?: InvitationScalarWhereInput | InvitationScalarWhereInput[]
    id?: StringFilter<"Invitation"> | string
    senderId?: StringFilter<"Invitation"> | string
    receiverId?: StringNullableFilter<"Invitation"> | string | null
    status?: EnumInvitationStatusFilter<"Invitation"> | $Enums.InvitationStatus
    type?: EnumInvitationTypeFilter<"Invitation"> | $Enums.InvitationType
    createdAt?: DateTimeFilter<"Invitation"> | Date | string
    updatedAt?: DateTimeFilter<"Invitation"> | Date | string
    inviteCode?: StringFilter<"Invitation"> | string
    expiresAt?: DateTimeNullableFilter<"Invitation"> | Date | string | null
    scoreLimit?: IntFilter<"Invitation"> | number
    pauseTime?: IntFilter<"Invitation"> | number
    allowPowerUps?: BoolFilter<"Invitation"> | boolean
    requiredCurrency?: IntFilter<"Invitation"> | number
    message?: StringNullableFilter<"Invitation"> | string | null
    matchId?: StringNullableFilter<"Invitation"> | string | null
  }

  export type InvitationUpsertWithWhereUniqueWithoutReceiverInput = {
    where: InvitationWhereUniqueInput
    update: XOR<InvitationUpdateWithoutReceiverInput, InvitationUncheckedUpdateWithoutReceiverInput>
    create: XOR<InvitationCreateWithoutReceiverInput, InvitationUncheckedCreateWithoutReceiverInput>
  }

  export type InvitationUpdateWithWhereUniqueWithoutReceiverInput = {
    where: InvitationWhereUniqueInput
    data: XOR<InvitationUpdateWithoutReceiverInput, InvitationUncheckedUpdateWithoutReceiverInput>
  }

  export type InvitationUpdateManyWithWhereWithoutReceiverInput = {
    where: InvitationScalarWhereInput
    data: XOR<InvitationUpdateManyMutationInput, InvitationUncheckedUpdateManyWithoutReceiverInput>
  }

  export type MatchCreateWithoutInvitationInput = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1: MatchPlayerCreateNestedOneWithoutMatchAsOpponent1Input
    opponent2?: MatchPlayerCreateNestedOneWithoutMatchAsOpponent2Input
    spectators?: MatchSpectatorCreateNestedManyWithoutMatchInput
    bets?: BetCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingCreateNestedOneWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutInvitationInput = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1Id: string
    opponent2Id?: string | null
    spectators?: MatchSpectatorUncheckedCreateNestedManyWithoutMatchInput
    bets?: BetUncheckedCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingUncheckedCreateNestedOneWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutInvitationInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutInvitationInput, MatchUncheckedCreateWithoutInvitationInput>
  }

  export type UserCreateWithoutInvitationsSentInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchPlayers?: MatchPlayerCreateNestedManyWithoutUserInput
    matchSpectators?: MatchSpectatorCreateNestedManyWithoutUserInput
    bets?: BetCreateNestedManyWithoutUserInput
    invitationsReceived?: InvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutInvitationsSentInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchPlayers?: MatchPlayerUncheckedCreateNestedManyWithoutUserInput
    matchSpectators?: MatchSpectatorUncheckedCreateNestedManyWithoutUserInput
    bets?: BetUncheckedCreateNestedManyWithoutUserInput
    invitationsReceived?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutInvitationsSentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
  }

  export type UserCreateWithoutInvitationsReceivedInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchPlayers?: MatchPlayerCreateNestedManyWithoutUserInput
    matchSpectators?: MatchSpectatorCreateNestedManyWithoutUserInput
    bets?: BetCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutInvitationsReceivedInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchPlayers?: MatchPlayerUncheckedCreateNestedManyWithoutUserInput
    matchSpectators?: MatchSpectatorUncheckedCreateNestedManyWithoutUserInput
    bets?: BetUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutInvitationsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInvitationsReceivedInput, UserUncheckedCreateWithoutInvitationsReceivedInput>
  }

  export type MatchUpsertWithoutInvitationInput = {
    update: XOR<MatchUpdateWithoutInvitationInput, MatchUncheckedUpdateWithoutInvitationInput>
    create: XOR<MatchCreateWithoutInvitationInput, MatchUncheckedCreateWithoutInvitationInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutInvitationInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutInvitationInput, MatchUncheckedUpdateWithoutInvitationInput>
  }

  export type MatchUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1?: MatchPlayerUpdateOneRequiredWithoutMatchAsOpponent1NestedInput
    opponent2?: MatchPlayerUpdateOneWithoutMatchAsOpponent2NestedInput
    spectators?: MatchSpectatorUpdateManyWithoutMatchNestedInput
    bets?: BetUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUpdateOneWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutInvitationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1Id?: StringFieldUpdateOperationsInput | string
    opponent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    spectators?: MatchSpectatorUncheckedUpdateManyWithoutMatchNestedInput
    bets?: BetUncheckedUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type UserUpsertWithoutInvitationsSentInput = {
    update: XOR<UserUpdateWithoutInvitationsSentInput, UserUncheckedUpdateWithoutInvitationsSentInput>
    create: XOR<UserCreateWithoutInvitationsSentInput, UserUncheckedCreateWithoutInvitationsSentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsSentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsSentInput, UserUncheckedUpdateWithoutInvitationsSentInput>
  }

  export type UserUpdateWithoutInvitationsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPlayers?: MatchPlayerUpdateManyWithoutUserNestedInput
    matchSpectators?: MatchSpectatorUpdateManyWithoutUserNestedInput
    bets?: BetUpdateManyWithoutUserNestedInput
    invitationsReceived?: InvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsSentInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPlayers?: MatchPlayerUncheckedUpdateManyWithoutUserNestedInput
    matchSpectators?: MatchSpectatorUncheckedUpdateManyWithoutUserNestedInput
    bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    invitationsReceived?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutInvitationsReceivedInput = {
    update: XOR<UserUpdateWithoutInvitationsReceivedInput, UserUncheckedUpdateWithoutInvitationsReceivedInput>
    create: XOR<UserCreateWithoutInvitationsReceivedInput, UserUncheckedCreateWithoutInvitationsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInvitationsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInvitationsReceivedInput, UserUncheckedUpdateWithoutInvitationsReceivedInput>
  }

  export type UserUpdateWithoutInvitationsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPlayers?: MatchPlayerUpdateManyWithoutUserNestedInput
    matchSpectators?: MatchSpectatorUpdateManyWithoutUserNestedInput
    bets?: BetUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutInvitationsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPlayers?: MatchPlayerUncheckedUpdateManyWithoutUserNestedInput
    matchSpectators?: MatchSpectatorUncheckedUpdateManyWithoutUserNestedInput
    bets?: BetUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserCreateWithoutBetsInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchPlayers?: MatchPlayerCreateNestedManyWithoutUserInput
    matchSpectators?: MatchSpectatorCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationCreateNestedManyWithoutSenderInput
    invitationsReceived?: InvitationCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutBetsInput = {
    id: string
    userId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    matchPlayers?: MatchPlayerUncheckedCreateNestedManyWithoutUserInput
    matchSpectators?: MatchSpectatorUncheckedCreateNestedManyWithoutUserInput
    invitationsSent?: InvitationUncheckedCreateNestedManyWithoutSenderInput
    invitationsReceived?: InvitationUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutBetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
  }

  export type MatchCreateWithoutBetsInput = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1: MatchPlayerCreateNestedOneWithoutMatchAsOpponent1Input
    opponent2?: MatchPlayerCreateNestedOneWithoutMatchAsOpponent2Input
    spectators?: MatchSpectatorCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingCreateNestedOneWithoutMatchInput
    invitation?: InvitationCreateNestedOneWithoutMatchInput
  }

  export type MatchUncheckedCreateWithoutBetsInput = {
    id?: string
    mode: $Enums.GameMode
    status: $Enums.GameStatus
    duration: number
    createdAt?: Date | string
    confirmedAt?: Date | string | null
    winnerId?: string | null
    opponent1Id: string
    opponent2Id?: string | null
    spectators?: MatchSpectatorUncheckedCreateNestedManyWithoutMatchInput
    matchSetting?: MatchSettingUncheckedCreateNestedOneWithoutMatchInput
    invitation?: InvitationUncheckedCreateNestedOneWithoutMatchInput
  }

  export type MatchCreateOrConnectWithoutBetsInput = {
    where: MatchWhereUniqueInput
    create: XOR<MatchCreateWithoutBetsInput, MatchUncheckedCreateWithoutBetsInput>
  }

  export type UserUpsertWithoutBetsInput = {
    update: XOR<UserUpdateWithoutBetsInput, UserUncheckedUpdateWithoutBetsInput>
    create: XOR<UserCreateWithoutBetsInput, UserUncheckedCreateWithoutBetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBetsInput, UserUncheckedUpdateWithoutBetsInput>
  }

  export type UserUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPlayers?: MatchPlayerUpdateManyWithoutUserNestedInput
    matchSpectators?: MatchSpectatorUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUpdateManyWithoutSenderNestedInput
    invitationsReceived?: InvitationUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    matchPlayers?: MatchPlayerUncheckedUpdateManyWithoutUserNestedInput
    matchSpectators?: MatchSpectatorUncheckedUpdateManyWithoutUserNestedInput
    invitationsSent?: InvitationUncheckedUpdateManyWithoutSenderNestedInput
    invitationsReceived?: InvitationUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type MatchUpsertWithoutBetsInput = {
    update: XOR<MatchUpdateWithoutBetsInput, MatchUncheckedUpdateWithoutBetsInput>
    create: XOR<MatchCreateWithoutBetsInput, MatchUncheckedCreateWithoutBetsInput>
    where?: MatchWhereInput
  }

  export type MatchUpdateToOneWithWhereWithoutBetsInput = {
    where?: MatchWhereInput
    data: XOR<MatchUpdateWithoutBetsInput, MatchUncheckedUpdateWithoutBetsInput>
  }

  export type MatchUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1?: MatchPlayerUpdateOneRequiredWithoutMatchAsOpponent1NestedInput
    opponent2?: MatchPlayerUpdateOneWithoutMatchAsOpponent2NestedInput
    spectators?: MatchSpectatorUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUpdateOneWithoutMatchNestedInput
    invitation?: InvitationUpdateOneWithoutMatchNestedInput
  }

  export type MatchUncheckedUpdateWithoutBetsInput = {
    id?: StringFieldUpdateOperationsInput | string
    mode?: EnumGameModeFieldUpdateOperationsInput | $Enums.GameMode
    status?: EnumGameStatusFieldUpdateOperationsInput | $Enums.GameStatus
    duration?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    winnerId?: NullableStringFieldUpdateOperationsInput | string | null
    opponent1Id?: StringFieldUpdateOperationsInput | string
    opponent2Id?: NullableStringFieldUpdateOperationsInput | string | null
    spectators?: MatchSpectatorUncheckedUpdateManyWithoutMatchNestedInput
    matchSetting?: MatchSettingUncheckedUpdateOneWithoutMatchNestedInput
    invitation?: InvitationUncheckedUpdateOneWithoutMatchNestedInput
  }

  export type MatchSpectatorCreateManyMatchInput = {
    id?: string
    userId: string
    username: string
  }

  export type BetCreateManyMatchInput = {
    id?: string
    amount: number
    predictedWinnerId?: string | null
    status?: $Enums.BetStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    userId: string
  }

  export type MatchSpectatorUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutMatchSpectatorsNestedInput
  }

  export type MatchSpectatorUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type MatchSpectatorUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type BetUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    predictedWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    predictedWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BetUncheckedUpdateManyWithoutMatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    predictedWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MatchPlayerCreateManyUserInput = {
    id?: string
    username: string
    avatarUrl?: string | null
    isAI?: boolean
    finalScore?: number
    isReady?: boolean
    isHost?: boolean
    characterId: string
    paddleId: string
    rankTier: string
    rankDivision: string
    rankChange?: number | null
  }

  export type MatchSpectatorCreateManyUserInput = {
    id?: string
    username: string
    matchId: string
  }

  export type BetCreateManyUserInput = {
    id?: string
    amount: number
    predictedWinnerId?: string | null
    status?: $Enums.BetStatus
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    matchId: string
  }

  export type InvitationCreateManySenderInput = {
    id?: string
    receiverId?: string | null
    status?: $Enums.InvitationStatus
    type?: $Enums.InvitationType
    createdAt?: Date | string
    updatedAt?: Date | string
    inviteCode: string
    expiresAt?: Date | string | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency?: number
    message?: string | null
    matchId?: string | null
  }

  export type InvitationCreateManyReceiverInput = {
    id?: string
    senderId: string
    status?: $Enums.InvitationStatus
    type?: $Enums.InvitationType
    createdAt?: Date | string
    updatedAt?: Date | string
    inviteCode: string
    expiresAt?: Date | string | null
    scoreLimit: number
    pauseTime: number
    allowPowerUps: boolean
    requiredCurrency?: number
    message?: string | null
    matchId?: string | null
  }

  export type MatchPlayerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    finalScore?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isHost?: BoolFieldUpdateOperationsInput | boolean
    characterId?: StringFieldUpdateOperationsInput | string
    paddleId?: StringFieldUpdateOperationsInput | string
    rankTier?: StringFieldUpdateOperationsInput | string
    rankDivision?: StringFieldUpdateOperationsInput | string
    rankChange?: NullableIntFieldUpdateOperationsInput | number | null
    matchAsOpponent1?: MatchUpdateOneWithoutOpponent1NestedInput
    matchAsOpponent2?: MatchUpdateOneWithoutOpponent2NestedInput
  }

  export type MatchPlayerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    finalScore?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isHost?: BoolFieldUpdateOperationsInput | boolean
    characterId?: StringFieldUpdateOperationsInput | string
    paddleId?: StringFieldUpdateOperationsInput | string
    rankTier?: StringFieldUpdateOperationsInput | string
    rankDivision?: StringFieldUpdateOperationsInput | string
    rankChange?: NullableIntFieldUpdateOperationsInput | number | null
    matchAsOpponent1?: MatchUncheckedUpdateOneWithoutOpponent1NestedInput
    matchAsOpponent2?: MatchUncheckedUpdateOneWithoutOpponent2NestedInput
  }

  export type MatchPlayerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    finalScore?: IntFieldUpdateOperationsInput | number
    isReady?: BoolFieldUpdateOperationsInput | boolean
    isHost?: BoolFieldUpdateOperationsInput | boolean
    characterId?: StringFieldUpdateOperationsInput | string
    paddleId?: StringFieldUpdateOperationsInput | string
    rankTier?: StringFieldUpdateOperationsInput | string
    rankDivision?: StringFieldUpdateOperationsInput | string
    rankChange?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MatchSpectatorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    match?: MatchUpdateOneRequiredWithoutSpectatorsNestedInput
  }

  export type MatchSpectatorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type MatchSpectatorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type BetUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    predictedWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    match?: MatchUpdateOneRequiredWithoutBetsNestedInput
  }

  export type BetUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    predictedWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type BetUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    predictedWinnerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBetStatusFieldUpdateOperationsInput | $Enums.BetStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    matchId?: StringFieldUpdateOperationsInput | string
  }

  export type InvitationUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    match?: MatchUpdateOneWithoutInvitationNestedInput
    receiver?: UserUpdateOneWithoutInvitationsReceivedNestedInput
  }

  export type InvitationUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvitationUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvitationUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    match?: MatchUpdateOneWithoutInvitationNestedInput
    sender?: UserUpdateOneRequiredWithoutInvitationsSentNestedInput
  }

  export type InvitationUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type InvitationUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    status?: EnumInvitationStatusFieldUpdateOperationsInput | $Enums.InvitationStatus
    type?: EnumInvitationTypeFieldUpdateOperationsInput | $Enums.InvitationType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inviteCode?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scoreLimit?: IntFieldUpdateOperationsInput | number
    pauseTime?: IntFieldUpdateOperationsInput | number
    allowPowerUps?: BoolFieldUpdateOperationsInput | boolean
    requiredCurrency?: IntFieldUpdateOperationsInput | number
    message?: NullableStringFieldUpdateOperationsInput | string | null
    matchId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
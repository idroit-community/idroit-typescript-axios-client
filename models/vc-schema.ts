/* tslint:disable */
/* eslint-disable */
/**
 * iDroit Dashboard Admin API
 *      これは[株式会社フォアー](https://www.fore-co.ltd/ja/)が開発するを使ったDecentralizd Identifiers / Verifiable Credentials(DID/VC)に関係する機能を簡単に利用するための REST API です。現在以下のユースケースをサポートしています。これは今後も拡張されていきます。     - DIDの生成:      - グループ管理機能       - (企業/プロジェクトのまとまり)ごとにユーザー、クライアント、証明書(VC)スキーマを紐付けて管理する。          詳細は以下を参照してください。     - [idroit dashboard admin UI](https://admin.idroit-dashboard.com)     - [idroit dashboard公式ホームページ]()     - [idroit dashboard操作マニュアル]()      以下は関連リンクです。     - [Universal Resolver](https://dev.uniresolver.io/)     - [W3C DID Core 1.0](https://www.w3.org/TR/did-core/)     - [Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/)   
 *
 * OpenAPI spec version: 0.9.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { Badge } from './badge';
import { Group } from './group';
import { User } from './user';
import { VcContext } from './vc-context';
import { VcInfo } from './vc-info';
import { VcSchemaProperty } from './vc-schema-property';
 /**
 * 
 *
 * @export
 * @interface VcSchema
 */
export interface VcSchema {

    /**
     * (必須) VCスキーマの識別子
     *
     * @type {string}
     * @memberof VcSchema
     * @example 123e4567-e89b-12d3-a456-426614174000
     */
    id: string;

    /**
     * (必須) VCスキーマのタイトル
     *
     * @type {string}
     * @memberof VcSchema
     * @example VC Schema 1
     */
    title: string;

    /**
     * (必須) VCスキーマのバージョン
     *
     * @type {string}
     * @memberof VcSchema
     * @example 1.0.0
     */
    version: string;

    /**
     * (任意) VCスキーマの説明文
     *
     * @type {string}
     * @memberof VcSchema
     * @example This is Project Group 1.
     */
    description: string;

    /**
     * (必須) VCスキーマがバッジのスキーマか否か
     *
     * @type {string}
     * @memberof VcSchema
     * @example false
     */
    isBadgeSchema?: string;

    /**
     * (任意) このVCスキーマを用いて生成したVC情報の配列。
     *
     * @type {Array<VcInfo>}
     * @memberof VcSchema
     */
    vcInfos?: Array<VcInfo>;

    /**
     * (任意) VCスキーマに設定したcontext項目の配列
     *
     * @type {Array<VcContext>}
     * @memberof VcSchema
     */
    vcContexts?: Array<VcContext>;

    /**
     * (必須) VCスキーマの項目情報の配列
     *
     * @type {Array<VcSchemaProperty>}
     * @memberof VcSchema
     */
    vcSchemaProperties?: Array<VcSchemaProperty>;

    /**
     * (任意) VCスキーマを紐付けたグループの配列
     *
     * @type {Array<Group>}
     * @memberof VcSchema
     */
    groups?: Array<Group>;

    /**
     * (任意) VCスキーマを紐付けたバッジ
     *
     * @type {Array<Badge>}
     * @memberof VcSchema
     */
    badges?: Array<Badge>;

    /**
     * (任意) VCスキーマに紐付けるバッジ用の画像。`isBadgeSchema`プロパティが`true`の場合必須。
     *
     * @type {any}
     * @memberof VcSchema
     */
    file?: any;

    /**
     * (必須) VCスキーマを作成したユーザーアカウント。
     *
     * @type {User}
     * @memberof VcSchema
     */
    createdBy: User;

    /**
     * (必須) VCスキーマの作成日時
     *
     * @type {string}
     * @memberof VcSchema
     * @example 2024-05-24T06:39:25.756Z
     */
    createdAt: string;

    /**
     * (必須) VCスキーマの更新日時
     *
     * @type {string}
     * @memberof VcSchema
     * @example 2024-05-24T06:39:25.756Z
     */
    updatedAt: string;
}

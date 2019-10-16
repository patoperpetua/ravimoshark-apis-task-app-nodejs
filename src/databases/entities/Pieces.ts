import { Column, Entity, Index, OneToMany } from "typeorm";
import { Interventions } from "./Interventions";
import { Machines } from "./Machines";

@Entity("Pieces")
@Index("UQ_Pieces_RefArticle", ["refArticle"], { unique: true })
export class Pieces {
    @Column("nvarchar", {
        length: 100,
        name: "RefArticle",
        nullable: false,
        primary: true
    })
    public refArticle?: string;

    @Column("nvarchar", {
        length: 100,
        name: "DesignationArticle",
        nullable: true
    })
    public name?: string | null;

    @Column("nvarchar", {
        length: 100,
        name: "Statut",
        nullable: true,
        select: false
    })
    public statut?: string | null;

    @Column("float", {
        name: "PrixVente",
        nullable: true,
        precision: 53,
        select: false
    })
    public prixVente?: number | null;

    @Column("float", {
        name: "UniteVente",
        nullable: true,
        precision: 53,
        select: false
    })
    public uniteVente?: number | null;

    @Column("nvarchar", {
        length: 100,
        name: "IntituleFamille",
        nullable: true,
        select: false
    })
    public intituleFamille?: string | null;

    @Column("float", {
        name: "DernierPrixAchat",
        nullable: true,
        precision: 53,
        select: false
    })
    public dernierPrixAchat?: number | null;

    @Column("nvarchar", {
        length: 100,
        name: "Conditionnement",
        nullable: true,
        select: false
    })
    public conditionnement?: string | null;

    @Column("nvarchar", {
        length: 100,
        name: "DetergentType",
        nullable: true,
        select: false
    })
    public detergentType?: string | null;

    @Column("float", {
        name: "Poids",
        nullable: true,
        precision: 53,
        select: false
    })
    public poids?: number | null;

    @Column("float", {
        name: "PoidSuc",
        nullable: true,
        precision: 53,
        select: false
    })
    public poidSuc?: number | null;

    @Column("datetimeoffset", {
        default: () => "sysdatetimeoffset()",
        name: "__createdAt",
        nullable: false,
        select: false
    })
    public createdAt?: Date;

    @Column("datetimeoffset", {
        default: () => "sysdatetimeoffset()",
        name: "__updatedAt",
        nullable: false,
        select: false
    })
    public updatedAt?: Date;

    @Column("bit", {
        default: () => "(0)",
        name: "__deleted",
        nullable: false
    })
    public deleted?: boolean;

    @OneToMany(() => Interventions, (interventions: Interventions) => interventions.refArticle)
    public interventions?: Array<Interventions>;

    @OneToMany(() => Machines, (machine: Machines) => machine.refArticle)
    public machines?: Promise<Array<Machines>>;

    public constructor(init?: Partial<Pieces>) {
      Object.assign(this, init);
    }
}

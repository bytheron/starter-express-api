class QCOrchard {
    constructor(
        OrchardID,
        OrgCode,
        PUC,
        Orchard,
        LongDesc,
        MedDesc,
        Hectares,
        Active,
        CreateUser,
        CreateDate,
        Commodity,
        Variety,
        RootVariety,
        ExportStatus,
        NumberOfTrees
    ) {
        this.OrchardID = OrchardID;
        this.OrgCode = OrgCode;
        this.PUC = PUC;
        this.Orchard = Orchard;
        this.CreateUser = CreateUser;
        this.CreateDate = CreateDate;
        this.LongDesc = LongDesc;
        this.MedDesc = MedDesc;
        this.Hectares = Hectares;
        this.Active = Active;
        this.Commodity = Commodity;
        this.Variety = Variety;
        this.RootVariety = RootVariety;
        this.ExportStatus = ExportStatus;
        this.NumberOfTrees = NumberOfTrees;
    }
}

module.exports = QCOrchard;

class QCHeader {
    constructor(
        InspectionID,
        InspectionNumber,
        InspectorCode,
        InspectorName,
        InspectorSurname,
        SupervisorName,
        SupervisorSurname,
        ApprovalStatus,
        ApprovalDate,
        InspectDate,
        VersionNumber,
        DepotCode,
        PHC,
        PUC,
        Orchard,
        Commodity,
        Variety,
        SampleSize,
        Degreened,
        CreateUser,
        CreateDate,
    ) {
        this.InspectionID  = InspectionID;
        this.InspectionNumber  = InspectionNumber;
        this.InspectorCode  = InspectorCode;
        this.InspectorName  = InspectorName;
        this.InspectorSurname  = InspectorSurname;
        this.SupervisorName  = SupervisorName;
        this.SupervisorSurname  = SupervisorSurname;
        this.ApprovalStatus  = ApprovalStatus;
        this.ApprovalDate  = ApprovalDate;
        this.InspectDate  = InspectDate;
        this.VersionNumber  = VersionNumber;
        this.DepotCode  = DepotCode;
        this.PHC  = PHC;
        this.PUC  = PUC;
        this.Orchard  = Orchard;
        this.Commodity  = Commodity;
        this.Variety  = Variety;
        this.SampleSize  = SampleSize;
        this.Degreened  = Degreened;
        this.CreateUser  = CreateUser;
        this.CreateDate  = CreateDate;
    }
}

module.exports = QCHeader;

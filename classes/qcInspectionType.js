class QCInspectorType {
    constructor(
        InspectTypeID,
        InspectType,
        TypeDescription,
        Barcoded,
        CreateUser,
        CreateDate
    ) {
        this.InspectTypeID = InspectTypeID;
        this.InspectType = InspectType;
        this.TypeDescription = TypeDescription;
        this.Barcoded = Barcoded;
        this.CreateUser = CreateUser;
        this.CreateDate = CreateDate;
    }
}

module.exports = QCInspectorType;

class QCInspector {
    constructor(
        InspectorID,
        InspectorName,
        InspectorSurname,
        MobileNumber,
        Email,
        ProductionArea,
        InspectorUserName,
        InspectorPassword,
        InspectorCode,
        DeviceType,
        MacAddress,
        OperatingSystem,
        Supervisor,
        CreateUser,
        CreateDate
    ) {
        this.InspectorID = InspectorID;
        this.InspectorName = InspectorName;
        this.InspectorSurname = InspectorSurname;
        this.MobileNumber = MobileNumber;
        this.Email = Email;
        this.ProductionArea = ProductionArea;
        this.InspectorUserName = InspectorUserName;
        this.InspectorPassword = InspectorPassword;
        this.InspectorCode = InspectorCode;
        this.DeviceType = DeviceType;
        this.MacAddress = MacAddress;
        this.OperatingSystem = OperatingSystem;
        this.Supervisor = Supervisor;
        this.CreateUser = CreateUser;
        this.CreateDate = CreateDate;
    }
}

module.exports = QCInspector;

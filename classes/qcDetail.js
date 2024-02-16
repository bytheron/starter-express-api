class QCDetail {
    constructor(
        CullingID,
        InspectionNumber,
        CullingFactor,
        CullingNumber,
        NumberOfFruit,
        SamplePercentage,
        InspectType,
        InspectUnitNumber,
        PackCode,
        SizeCountRange,
        ColorRange,
        Brand,
        TargetMarket,
        DiameterRange,
        GrossWeight,
        NettWeight,
        Brix,
        Ratio,
        Acid,
        Pressure,
        JuicePercentage,
        SamplePhoto,
        SamplePhotoType,
        CreateUser,
        CreateDate
    ) {
        this.CullingID = CullingID;
        this.InspectionNumber = InspectionNumber;
        this.CullingFactor = CullingFactor;
        this.CullingNumber = CullingNumber;
        this.NumberOfFruit = NumberOfFruit;
        this.SamplePercentage = SamplePercentage;
        this.InspectType = InspectType;
        this.InspectUnitNumber = InspectUnitNumber;
        this.PackCode = PackCode;
        this.SizeCountRange = SizeCountRange;
        this.ColorRange = ColorRange;
        this.Brand = Brand;
        this.TargetMarket = TargetMarket;
        this.DiameterRange = DiameterRange;
        this.GrossWeight = GrossWeight;
        this.NettWeight = NettWeight;
        this.Brix = Brix;
        this.Ratio = Ratio;
        this.Acid = Acid;
        this.Pressure = Pressure;
        this.JuicePercentage = JuicePercentage;
        this.SamplePhoto = SamplePhoto;
        this.SamplePhotoType = SamplePhotoType;
        this.CreateUser = CreateUser;
        this.CreateDate = CreateDate;
    }
}

module.exports = QCDetail;

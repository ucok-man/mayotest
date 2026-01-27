// Mayo Castle Section Component
export const MayoCastleSection = () => {
  return (
    <div className="bg-white relative">
      <div className="w-full">
        <img
          src="/assets/images/mayo-real-castle.png"
          alt="Mayo Real Castle"
          className="w-full h-auto object-cover block"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/1920x600/FFE1E8/FF7797?text=Mayo+Castle";
          }}
        />
      </div>

      {/* Mayo Logo Stack - 5/8 at castle, 3/8 at footer */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-64 h-64"
        style={{ bottom: "-96px", zIndex: 20 }}
      >
        <img
          src="/assets/images/logo.png"
          alt="Mayo Logo"
          className="w-full h-full object-contain drop-shadow-2xl"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/256x256/FFE1E8/FF7797?text=MAYO";
          }}
        />
      </div>
    </div>
  );
};

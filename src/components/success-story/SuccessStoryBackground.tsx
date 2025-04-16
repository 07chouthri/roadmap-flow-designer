
const SuccessStoryBackground = () => {
  return (
    <>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(233,30,99,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(58,27,109,0.1),transparent_50%)]" />
      </div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-hads-purple/10 rounded-full blur-3xl animate-pulse" />
      <div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-hads-pink/10 rounded-full blur-3xl animate-pulse" 
        style={{ animationDelay: "1s" }} 
      />
    </>
  );
};

export default SuccessStoryBackground;

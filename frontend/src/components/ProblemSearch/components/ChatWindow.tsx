const ChatWindow = () => {
  return (
    <div
      className={"p-4 mx-8 my-4 bg-violet-400 dark:bg-green-500 rounded-2xl"}
    >
      <div className={"border-b-white flex justify-between"}>
        <h3>SOME_USER</h3>
        <h3>2024-04-17 16:15</h3>
      </div>
      <p className={"text-left"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores
        autem consequatur culpa, dicta doloremque dolores doloribus
        exercitationem impedit molestias odio perferendis perspiciatis, quas
        quidem rerum sed sequi sit tempora unde velit. Facere, laudantium nam!
        Animi molestias nostrum reiciendis sapiente?
      </p>
    </div>
  );
};

export default ChatWindow;

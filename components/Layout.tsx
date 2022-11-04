import { ComponentChildren } from "https://esm.sh/v95/preact@10.11.0/src/index.d.ts";

type Props = {
  children: ComponentChildren;
};

export default (props: Props) => {
  return (
    <div>
      <header className="w-full h-20 bg-gray-800 mb-10"></header>
      <main className="max-w-screen-lg mx-auto px-10">{props.children}</main>
      <footer className="w-full h-20 bg-gray-800 mt-10"></footer>
    </div>
  );
};

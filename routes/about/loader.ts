export async function loader() {
  return {
    title: "About Vibeframe",
    builtAt: new Date().toISOString(),
  };
}

export type Props = Awaited<ReturnType<typeof loader>>;

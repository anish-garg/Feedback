import { Html, Button } from "@react-email/components";

export function VerificationEmail(props) {
  const { url } = props;

  return (
    <Html lang="en">
      <Button href={url}>Click me</Button>
    </Html>
  );
}

export default VerificationEmail; 
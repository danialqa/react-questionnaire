import useUuid from '../useUuid';

describe('Uuid Hook', () => {
  test('Should generate uuid', () => {
    const uuid = useUuid();
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

    expect(uuid).toMatch(uuidRegex);
  });
});

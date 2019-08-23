import React from 'react';
import App from './App';
import Creatures from './Creatures';
import Details from './Details'
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';

describe('Routes', () => {
  it('should use the unicorn\'s route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/unicorns']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(Creatures)).toHaveLength(1);
  })

  it('should use the puppies route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/puppies']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(Creatures)).toHaveLength(1);
  })

  it('should use the shark\'s route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/sharks']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(Creatures)).toHaveLength(1);
  })

  it('should use the dolphin\'s route', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/dolphins']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(Creatures)).toHaveLength(1);
  })

  it('should display the information for a specific dolphin', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/dolphins/1']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(Details)).toHaveLength(1);
  })

  it('should not display details for a dolphin that doesn\'t exist', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/dolphins/10']}>
        <App />
      </MemoryRouter>
    )

    expect(wrapper.find(Details)).toHaveLength(0);
  })
})